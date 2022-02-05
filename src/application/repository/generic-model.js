const GenericModel = Model => ({
    create(data) {
        return Model.create(data);
    },
    get(conditions) {
        return Model.findAll(conditions ? {where:conditions } : {});
    },
    getById(id) {
        return Model.findOne({ where: { id } });
    },
    updateById(id, data) {
        return Model.update(data, { where: { id } });
    },
    update(conditions, data) {
        return Model.update(data, { where: conditions });
    },
    deleteById(id) {
        return Model.destroy({ where: { id } });
    },
    deleteByConditions(conditions) {
        console.log('111111111111111111111111111111111')
        console.log(conditions)

        return Model.destroy({ where: conditions });
    },
    findOrCreate(condition, newObj){
        return Model.findOrCreate({where:condition, defaults: newObj});
    }

});

export default GenericModel;
