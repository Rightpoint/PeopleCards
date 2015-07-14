pc.viewModels.CardList = function (){
    var self = this;

    self.cards = ko.observableArray([]);

    self.gettingData = function(){
        var deferred = $.Deferred();

        var data = [
            {name:"Gina Lee",office:"Chicago",serviceLine:"Creative",photo:"images/people/GinaLee.jpg"},
            {name:"Dan Costanzo",office:"Chicago",serviceLine:"BD",photo:"images/people/DanCostanzo.jpg"},
            {name:"Krystal Blesi",office:"Chicago",serviceLine:"Salesforce",photo:"images/people/KrystalBlesi.jpg"},
            {name:"Austin Smith",office:"Chicago",serviceLine:"Creative",photo:"images/people/AustinSmith.jpg"},
            {name:"Tim Alvis",office:"Chicago",serviceLine:"App Dev",photo:"images/people/TimAlvis.jpg"},
            {name:"Tom Keuten",office:"Michigan",serviceLine:"BD",photo:"images/people/TomKeuten.jpg"},
            {name:"Rob Mayer",office:"Chicago",serviceLine:"Alliances/BD",photo:"images/people/RobMayer.jpg"},
            {name:"Leslie Lockett",office:"Michigan",serviceLine:"Ops",photo:"images/people/LeslieLockett.jpg"},
            {name:"Syed Belgam",office:"Chicago",serviceLine:"Managed Services",photo:"images/people/SyedBelgam.jpg"},
            {name:"Barbara Kubas",office:"Chicago",serviceLine:"App Dev",photo:"images/people/BarbaraKubas.jpg"},
            {name:"Jay Mueller",office:"Chicago",serviceLine:"Client Partner",photo:"images/people/JayMueller.jpg"},
            {name:"Gautam Jaiswal",office:"Chicago",serviceLine:"App Dev",photo:"images/people/GautamJaiswal.jpg"},
            {name:"Steve Dykstra",office:"Michigan",serviceLine:"PMO",photo:"images/people/SteveDykstra.jpg"},
            {name:"Carlee Wolfe",office:"Chicago",serviceLine:"Change Management",photo:"images/people/CarleeWolfe.jpg"},
            {name:"Jimmy Hopton",office:"Chicago",serviceLine:"Creative",photo:"images/people/JimmyHopton.jpg"},
            {name:"Jordan Magenta",office:"Chicago",serviceLine:"Agency/Marketing",photo:"images/people/JordanMagenta.jpg"},
            {name:"Laurel Petty",office:"Chicago",serviceLine:"Creative",photo:"images/people/LaurelPetty.jpg"},
            {name:"Dave Domm",office:"Chicago",serviceLine:"Spark",photo:"images/people/DavidDomm.jpg"},
            {name:"Nick Carlson",office:"Chicago",serviceLine:"SharePoint",photo:"images/people/NickCarlson.jpg"},
            {name:"Lindsey Woolmington",office:"Denver",serviceLine:"SharePoint",photo:"images/people/LindseyWoolmington.jpg"},
            {name:"Ram Kota",office:"Chicago",serviceLine:"App Dev",photo:"images/people/RamKota.jpg"},
            {name:"Andy Bateman",office:"Chicago",serviceLine:"App Dev",photo:"images/people/AndyBateman.jpg"},
            {name:"Brian Mansfield",office:"Chicago",serviceLine:"Salesforce",photo:"images/people/BrianMansfield.jpg"},
            {name:"Darren Berry",office:"Michigan",serviceLine:"Managed Services",photo:"images/people/DarrenBerry.jpg"},
            {name:"Adam Burton",office:"Chicago",serviceLine:"Digital Strategy",photo:"images/people/AdamBurton.jpg"},
            {name:"Suman Kamath",office:"Denver",serviceLine:"PMO",photo:"images/people/SumanKamath.jpg"},
            {name:"Scott Rojas",office:"Chicago",serviceLine:"PMO",photo:"images/people/ScottRojas.jpg"},
            {name:"Rich Grenwick",office:"Michigan",serviceLine:"App Dev",photo:"images/people/RichGrenwick.jpg"},
            {name:"Sanjeev Karmacharya",office:"Chicago",serviceLine:"App Dev",photo:"images/people/SanjeevKarmacharya.jpg"},
            {name:"Sreeni Amrutur",office:"Michigan",serviceLine:"SharePoint",photo:"images/people/SreeniAmrutur.jpg"},
            {name:"Rebecca Steurer",office:"Chicago",serviceLine:"UX",photo:"images/people/RebeccaSteurer.jpg"},
            {name:"Sarah Derry",office:"Chicago",serviceLine:"Marketing",photo:"images/people/SarahDerry.jpg"},
            {name:"Emily Olson",office:"Chicago",serviceLine:"App Dev",photo:"images/people/EmilyOlson.jpg"},
            {name:"John Ingraffia",office:"Chicago",serviceLine:"SharePoint",photo:"images/people/JohnIngraffia.jpg"},
            {name:"Aja Shamblee",office:"Chicago",serviceLine:"Creative",photo:"images/people/AjaShamblee.jpg"},
            {name:"Victoria Nahas",office:"Chicago",serviceLine:"Recruiter",photo:"images/people/VictoriaNahas.jpg"},
            {name:"Owen Craig",office:"Chicago",serviceLine:"Recruiter",photo:"images/people/OwenCraig.jpg"},
            {name:"Alex Swarthout",office:"Chicago",serviceLine:"Delivery Support",photo:"images/people/AlexSwarthout.jpg"},
            {name:"Miles Heaton",office:"Chicago",serviceLine:"Managed Services",photo:"images/people/MilesHeaton.jpg"},
            {name:"Jeff Small",office:"Chicago",serviceLine:"PMO",photo:"images/people/JeffSmall.jpg"},
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