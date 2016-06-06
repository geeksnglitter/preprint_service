import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        makePost: function(title, abstract, authors, subject, journal, content, link, citation) {
            console.log("made it");

            var data = {
                title: title,
                abstract: abstract,
                authors: authors,
                subject: subject,
                journal: journal,
                content: content,
                link: link,
                citation: citation,
            };
            var formData = this.store.createRecord('preprint', {
                title: title,
                abstract: abstract,
                authors: authors,
                subject: subject,
                journal: journal,
                content: content,
                link: link,
                citation: citation,
            });
            console.log(data);
            //formData.save();
        }
    }
});