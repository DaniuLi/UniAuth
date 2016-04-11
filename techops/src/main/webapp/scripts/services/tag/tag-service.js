define(['../../utils/constant'], function (constant) {
    var Service = function ($resource) {
        var svc = $resource(constant.apiBase + '/tag/:method', null, {
            getTags: {
                method: 'POST',
                params: {
                    method: 'query'
                },
                isArray: false,
                timeout: constant.reqTimeout
            },
            getTagTypes: {
                method: 'POST',
                params: {
                    method: 'types'
                },
                isArray: false,
                timeout: constant.reqTimeout
            },
            addNewTagType: {
                method: 'POST',
                params: {
                    method: 'add-new-tag-type'
                },
                isArray: false,
                timeout: constant.reqTimeout
            },
            updateTagType: {
                method: 'POST',
                params: {
                    method: 'update-tag-type'
                },
                isArray: false,
                timeout: constant.reqTimeout
            },
            deleteTagType: {
                method: 'POST',
                params: {
                    method: 'delete-tag-type'
                },
                isArray: false,
                timeout: constant.reqTimeout
            }

        });
        svc.tagShared = {};
        return svc;
    };

    return {
        name: "TagService",
        svc: ["$resource", Service]
    };


});
