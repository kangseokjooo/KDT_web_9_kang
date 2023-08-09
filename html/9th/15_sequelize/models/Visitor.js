//visitor에대한 테이블정의
const Visitor=function(sequelize,DataTypes){
    //sequelize는 모델즈에 인덱스js 에있는 sequelize
    //DataTypes는 models에 index.js에있는 대문자 sequelize
    const model = sequelize.define(
        'visitor',
        {
            id:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            }

            ,
            name:{
                type:DataTypes.STRING(10),
                allowNull:false
            }

            ,
            comment:{
                type:DataTypes.TEXT('medium'),
            }
        
        },{
            tableName:'visitor',
            freezeTableName:true,
            timestamps:false,
        });
        
        return model
}

module.exports=Visitor;