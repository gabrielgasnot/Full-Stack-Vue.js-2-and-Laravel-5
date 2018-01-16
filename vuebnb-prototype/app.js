var app = new Vue({
    el: '#app',
    // Class methods
    methods: {
        escapeKeyListener: function(evt) {
            if(evt.keyCode === 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },
    // Class datas
    data: {
        title: sample.title,
        address: sample.address,
        about: sample.about,
        headerImageStyle: {
            'background-image': 'url(sample/header.jpg)'
        },
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true,
        modalOpen: false
    },
    // watchers
    watch: {
        modalOpen: function() {
            var className = 'modal-open';
            if(this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    // Lifecycle events
    created: function() {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function() {
        document.removeEventListener('keyup', this.escapeKeyListener);
    }
});