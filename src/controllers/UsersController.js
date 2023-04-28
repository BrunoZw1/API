const AppError = require("../utils/AppError")

class UsersController {
/*
// Um controler deve ter no máximo 5 métodos, podendo ter apenas um, ou dois, etc.
// Geralmente são estes 5 métodos
* index - GET para listar vários registros
* show - GET para exibir um registro específico
* create - POST para criar um registro
* update - PUT para atualizar um registro
* delete - DELETE para remover um registro
*/

  create(request, response) {
    const {name, email, password} = request.body;

    if(!name) {
      throw new AppError("Insira o seu nome!");
    }

    response.status(201).json({name, email, password});
}
}

module.exports = UsersController;