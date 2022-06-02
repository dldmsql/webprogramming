const Sequelize = require('sequelize');

class UserInfo extends Sequelize.Model {
    static init(sequelize) {
        const userAttr = {
            age : {
                type : Sequelize.NUMBER(2),
                allowNull: true,
            }, 
            gender : {
                type : Sequelize.BOOLEAN,
                allowNull : false,
            },
            
        }
    }
}