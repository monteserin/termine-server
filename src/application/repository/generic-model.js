const GenericModel = Model => ({
    create(data) {
        return Model.create(data);
    },
    get(conditions) {
        return Model.findAll(conditions ? {where:conditions } : {});
    },
    getById(id) {
        return Model.findOne({ where: { id } , raw:true});
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
        return Model.destroy({ where: conditions });
    },
    findOrCreate(condition, newObj){
        return Model.findOrCreate({where:condition, defaults: newObj});
    }

});

export default GenericModel;
