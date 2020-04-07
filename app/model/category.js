/*
 * @Author: 柒叶
 * @Date: 2020-04-07 10:37:17
 * @Last Modified by: 柒叶
 * @Last Modified time: 2020-04-07 10:55:14
 */

'use strict';
module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const Category = app.model.define('categories', {
    id: {
      primaryKey: true,
      type: INTEGER,
    },
    name: {
      type: STRING(50),
      defaultValue: null,
    },
    en_name: {
      type: STRING(50),
      defaultValue: null,
    },
    status: {
      type: INTEGER,
      defaultValue: 1,
      comment: '1->正常,2->删除',
    },
  });
  Category.associate = () => {
    app.model.Category.hasMany(app.model.Tag, { as: 'tag' });
    app.model.Category.hasMany(app.model.Article, { as: 'article' });
  };
  return Category;
};
