import User from './User.js'

export default class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }

  aprovarEstudante(nomeAluno, curso) {
    return `Estudante ${nomeAluno} passou no curso ${curso}`
  }
}
