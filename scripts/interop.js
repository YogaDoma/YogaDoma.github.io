var YogaDoma = YogaDoma || {};

YogaDoma.setDocumentTitle = function (title) {
    document.title = title;
}

YogaDoma.getIdToken = function () {
    const key = Object.keys(sessionStorage).find(x => x.startsWith("oidc.user"));
    if (key) {
        const json = JSON.parse(sessionStorage[key]);
        return json.id_token;
    }
    return null;
}
