const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            comment : {
                type: Sequelize.STRING(100),
                allowNull : false,
            },
            created_at : {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Comment',
            tableName: 'comments',
            paranoid: false,
            charset: 'uft8mb4',
            collate : 'uft8mb4_general_ci',
        });
    }
    static associate(db) {
        db.Comment.belongsTo(db.User, {foreignKey: 'commenter', targetKey : 'id'});
    }
};