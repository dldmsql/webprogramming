const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(Sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            age : {
                type: Sequelize.INTEGER,
                allowNull : false,
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            comment : {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            created_at : {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
        }, {
            Sequelize ,
            timestamps: false,
            underscored : false,
            modelName: 'User',
            tableName : 'users',
            paranoid: false,
            charset : 'utf-8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.User.hasMany(db.Comment, {foreignKey: 'commenter', sourceKey: 'id'});
    }
};