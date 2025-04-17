import conexao from '../config/conexao.js'

const Time = conexao.Schema({
    nome: {type:String, required:true},
    estadio:{type:String},
    classificacao:{type:Number},
    datafundacao:{type:String},
    pontos:{type:Number}
});

export default conexao.model('Time',Time)
