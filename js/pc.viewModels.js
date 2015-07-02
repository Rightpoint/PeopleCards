pc.viewModels.CardList = function (){
    var self = this;

    self.cards = ko.observableArray([]);

    self.gettingData = function(){
        var deferred = $.Deferred();

        var data = [
            {
                name: 'Dan Costanzo',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Dan%20Costanzo.jpg'
            },
            {
                name: 'Gina Lee',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Gina%20Lee.jpg',
            },
            {
                name: 'Tom Keuten',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Tom%20Keuten.jpg'
            },
            {
                name: 'Krystal Blesi',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Krystal%20Blesi.jpg'
            },
            {
                name: 'Tim Alvis',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Tim%20Alvis.jpg'
            },
            {
                name: 'Austin Smith',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Austin%20Smith.jpg'
            },
            {
                name: 'Leslie Lockett',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Leslie%20Lockett.jpg'
            },
            {
                name: 'Rob Mayer',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Rob%20Mayer.jpg'
            },
            {
                name: 'Dave Domm',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/David%20Domm.jpg'
            },
            {
                name: 'Laurel Petty',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Laurel%20Petty.jpg'
            },
            {
                name: 'Jordan Magenta',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Jordan%20Magenta.jpg'
            },
            {
                name: 'Jimmy Hopton',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Jimmy%20Hopton.jpg'
            },
            {
                name: 'Carlee Wolfe',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Carlee%20Wolfe.jpg'
            },
            {
                name: 'Steve Dykstra',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Steve%20Dykstra.jpg'
            },
            {
                name: 'Gautam Jaiswal',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Gautam%20Jaiswal.jpg'
            },
            {
                name: 'Jay Mueller',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Jay%20Mueller.jpg'
            },
            {
                name: 'Barbara Kubas',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Barbara%20Kubas.jpg'
            },
            {
                name: 'Syed Belgam',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Syed%20Belgam.jpg'
            },
            {
                name: 'Nick Carlson',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Nick%20Carlson.jpg'
            },
            {
                name: 'Lindsey Woolmington',
                photo: 'https://ipoint.rightpoint.com/Announcements/Lists/Photos/Lindsey%20Woolmington.jpg'
            },
            {
                name: 'Ram Kota',
                photo: 'https://ipoint.rightpoint.com/Company%20Photos/Employee%20Photos/Ram%20Kota.jpg'
            },
            {
                name: 'Andy Bateman',
                photo: 'https://ipoint.rightpoint.com/Company%20Photos/Employee%20Photos/Andy%20Bateman.jpg'
            },
            {
                name: 'Brian Mansfield',
                photo: 'https://ipoint.rightpoint.com/Company%20Photos/Employee%20Photos/Brian%20Mansfield.jpg'
            }
        ];

        setTimeout(function(){
            deferred.resolve(data);
        }, 0);

        return deferred.promise();
    };

    self.init = function(){
        self.gettingData().done(function(data){
            pc.common.shuffle(data);
             self.cards(data);

            self.loadCardBehavior('.card');
        });
    };

    self.init();
};
pc.viewModels.CardList.prototype.loadCardBehavior = function(selector){
      var $cards = $(selector);
    $cards.flip();
};
pc.viewModels.CardList.prototype.shuffleCards = function(){
    this.cards(pc.common.shuffle(this.cards()));
};