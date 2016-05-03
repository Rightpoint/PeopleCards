pc.viewModels.CardList = function (){
    var self = this;

    self.imagePath = "Content/Images/People/";
    self.classCard = ".card";

    self.textAll = "All";
    self.textAnywhere = "Anywhere";

    self.serviceLinesAll = [];
    self.serviceLines = ko.observableArray([
                                            self.textAll//,
                                            //"Account Services",
                                            //"Agency/Marketing",
                                            //"Alliances/BD",
                                            //"App Dev",
                                            //"BD",
                                            //"Change Management",
                                            //"Client Partner",
                                            //"Creative",
                                            //"Delivery",
                                            //"Delivery Support",
                                            //"Development",
                                            //"Digital Strategy",
                                            //"Executive",
                                            //"Finance/HR",
                                            //"Managed Services",
                                            //"PMO",
                                            //"Production",
                                            //"QA",
                                            //"Recruiter",
                                            //"Sales & Marketing",
                                            //"Salesforce",
                                            //"SharePoint",
                                            //"Spark",
                                            //"Strategy & User Experience",
                                            //"UX"
                                            ]);
    self.selectedServiceLine = ko.observable(self.textAll);

    self.officesAll = [];
    self.offices = ko.observableArray([
                                       self.textAnywhere//,
                                       //"Atlanta",
                                       //"Boston",
                                       //"Chicago",
                                       //"Dallas",
                                       //"Denver",
                                       //"Los Angeles",
                                       //"Michigan",
                                       //"San Francisco"
                                       ]);
    self.selectedOffice = ko.observable(self.textAnywhere);

    self.originsAll = [];
    self.origins = ko.observableArray([self.textAll//,
                                       //"Rightpoint", 
                                       //"Oasis"
                                      ]);
    self.selectedOrigin = ko.observable(self.textAll);

    self.serviceLinesByOffice = ko.observableArray([]);
    self.officesByServiceLine = ko.observableArray([]);
    self.serviceLinesByOrigin = ko.observableArray([]);
    self.officesByOrigin = ko.observableArray([]);

    self.cardsAll = ko.observableArray([]);
    self.cards = ko.observableArray([]);

    self.gettingData = function(){
        var deferred = $.Deferred();

        var data = [
            { name: "Gina Lee", office:"Chicago",serviceLine:"Creative",photo:self.imagePath + "GinaLee.jpg", origin:"Rightpoint" },
            { name: "Dan Costanzo", office: "Chicago", serviceLine: "BD", photo: self.imagePath + "DanCostanzo.jpg", origin: "Rightpoint" },
            { name: "Krystal Blesi", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "KrystalBlesi.jpg", origin: "Rightpoint" },
            { name: "Austin Smith", office: "Chicago", serviceLine: "Creative", photo: self.imagePath + "AustinSmith.jpg", origin: "Rightpoint" },
            { name: "Tim Alvis", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "TimAlvis.jpg", origin: "Rightpoint" },
            { name: "Tom Keuten", office: "Michigan", serviceLine: "BD", photo: self.imagePath + "TomKeuten.jpg", origin: "Rightpoint" },
            { name: "Rob Mayer", office: "Chicago", serviceLine: "Alliances/BD", photo: self.imagePath + "RobMayer.jpg", origin: "Rightpoint" },
            { name: "Leslie Lockett", office: "Michigan", serviceLine: "Delivery Support", photo: self.imagePath + "LeslieLockett.jpg", origin: "Rightpoint" },
            { name: "Syed Belgam", office: "Chicago", serviceLine: "Managed Services", photo: self.imagePath + "SyedBelgam.jpg", origin: "Rightpoint" },
            { name: "Barbara Kubas", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "BarbaraKubas.jpg", origin: "Rightpoint" },
            { name: "Jay Mueller", office: "Chicago", serviceLine: "Client Partner", photo: self.imagePath + "JayMueller.jpg", origin: "Rightpoint" },
            { name: "Gautam Jaiswal", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "GautamJaiswal.jpg", origin: "Rightpoint" },
            { name: "Steve Dykstra", office: "Michigan", serviceLine: "PMO", photo: self.imagePath + "SteveDykstra.jpg", origin: "Rightpoint" },
            { name: "Carlee Wolfe", office: "Chicago", serviceLine: "Change Management", photo: self.imagePath + "CarleeWolfe.jpg", origin: "Rightpoint" },
            { name: "Jimmy Hopton", office: "Chicago", serviceLine: "Creative", photo: self.imagePath + "JimmyHopton.jpg", origin: "Rightpoint" },
            { name: "Jordan Magenta", office: "Chicago", serviceLine: "Agency/Marketing", photo: self.imagePath + "JordanMagenta.jpg", origin: "Rightpoint" },
            { name: "Laurel Petty", office: "Chicago", serviceLine: "Creative", photo: self.imagePath + "LaurelPetty.jpg", origin: "Rightpoint" },
            { name: "Dave Domm", office: "Chicago", serviceLine: "Spark", photo: self.imagePath + "DavidDomm.jpg", origin: "Rightpoint" },
            { name: "Nick Carlson", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "NickCarlson.jpg", origin: "Rightpoint" },
            { name: "Lindsey Woolmington", office: "Denver", serviceLine: "SharePoint", photo: self.imagePath + "LindseyWoolmington.jpg", origin: "Rightpoint" },
            { name: "Ram Kota", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "RamKota.jpg", origin: "Rightpoint" },
            { name: "Andy Bateman", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "AndyBateman.jpg", origin: "Rightpoint" },
            { name: "Brian Mansfield", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "BrianMansfield.jpg", origin: "Rightpoint" },
            { name: "Darren Berry", office: "Michigan", serviceLine: "Managed Services", photo: self.imagePath + "DarrenBerry.jpg", origin: "Rightpoint" },
            { name: "Adam Burton", office: "Chicago", serviceLine: "Digital Strategy", photo: self.imagePath + "AdamBurton.jpg", origin: "Rightpoint" },
            { name: "Suman Kamath", office: "Denver", serviceLine: "PMO", photo: self.imagePath + "SumanKamath.jpg", origin: "Rightpoint" },
            { name: "Scott Rojas", office: "Chicago", serviceLine: "PMO", photo: self.imagePath + "ScottRojas.jpg", origin: "Rightpoint" },
            { name: "Rich Grenwick", office: "Michigan", serviceLine: "App Dev", photo: self.imagePath + "RichGrenwick.jpg", origin: "Rightpoint" },
            { name: "Sanjeev Karmacharya", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "SanjeevKarmacharya.jpg", origin: "Rightpoint" },
            { name: "Sreeni Amrutur", office: "Michigan", serviceLine: "SharePoint", photo: self.imagePath + "SreeniAmrutur.jpg", origin: "Rightpoint" },
            { name: "Rebecca Steurer", office: "Chicago", serviceLine: "UX", photo: self.imagePath + "RebeccaSteurer.jpg", origin: "Rightpoint" },
            { name: "Sarah Derry", office: "Chicago", serviceLine: "Marketing", photo: self.imagePath + "SarahDerry.jpg", origin: "Rightpoint" },
            { name: "Emily Olson", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "EmilyOlson.jpg", origin: "Rightpoint" },
            { name: "John Ingraffia", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "JohnIngraffia.jpg", origin: "Rightpoint" },
            { name: "Aja Shamblee", office: "Chicago", serviceLine: "Creative", photo: self.imagePath + "AjaShamblee.jpg", origin: "Rightpoint" },
            { name: "Victoria Nahas", office: "Chicago", serviceLine: "Recruiter", photo: self.imagePath + "VictoriaNahas.jpg", origin: "Rightpoint" },
            { name: "Owen Craig", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "OwenCraig.jpg", origin: "Rightpoint" },
            { name: "Alex Swarthout", office: "Chicago", serviceLine: "Delivery Support", photo: self.imagePath + "AlexSwarthout.jpg", origin: "Rightpoint" },
            { name: "Miles Heaton", office: "Chicago", serviceLine: "Managed Services", photo: self.imagePath + "MilesHeaton.jpg", origin: "Rightpoint" },
            { name: "Jeff Small", office: "Chicago", serviceLine: "PMO", photo: self.imagePath + "JeffSmall.jpg", origin: "Rightpoint" },
            { name: "Craig Browder", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "CraigBrowder.jpg", origin: "Rightpoint" },
            { name: "Chris Fitzsimonds", office: "Michigan", serviceLine: "App Dev", photo: self.imagePath + "ChristianFitzsimonds.jpg", origin: "Rightpoint" },
            { name: "Shweta Singh", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "NoPhoto.jpg", origin: "Rightpoint" },
            { name: "Joel Kienitz", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "NoPhoto.jpg", origin: "Rightpoint" },
            { name: "Angelo Georgiou", office: "Chicago", serviceLine: "PMO", photo: self.imagePath + "NoPhoto.jpg", origin: "Rightpoint" },
            { name: "Jaime Velez", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "JaimeVelez.jpg", origin: "Rightpoint" },

            { name: "Allison Pitre", office: "Boston", serviceLine: "Finance/HR", photo: self.imagePath + "Allison Pitre.jpg", origin: "Oasis" },
            { name: "Aniket Gadre", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Aniket Gadre.jpg", origin: "Oasis" },
            { name: "Ariana Ross", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Ariana Ross.jpg", origin: "Oasis" },
            { name: "Benjamin Sewards", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Benjamin Sewards.jpg", origin: "Oasis" },
            { name: "Bill Gonzalez", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Bill Gonzalez.jpg", origin: "Oasis" },
            { name: "Brandon Lackey", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Brendan Pugh", office: "Boston", serviceLine: "Account Services", photo: self.imagePath + "Brendan Pugh.jpg", origin: "Oasis" },
            { name: "Carolina Coviello", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Cassi Pires", office: "Los Angeles", serviceLine: "Account Services", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Catherine Renehan", office: "Boston", serviceLine: "Production", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Cerina Epple", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Charles Brooks", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Chris Crombie", office: "Boston", serviceLine: "Sales & Marketing", photo: self.imagePath + "Chris Crombie.jpg", origin: "Oasis" },
            { name: "Christina Hunchard", office: "Boston", serviceLine: "Account Services", photo: self.imagePath + "Christina Hunchard.jpg", origin: "Oasis" },
            { name: "Christopher Daly", office: "Boston", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Colin Azeltine", office: "San Francisco", serviceLine: "Strategy & User Experience", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Craig Kublin", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Craig Kublin.jpg", origin: "Oasis" },
            { name: "Dale Traxler", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "Dale Traxler.jpg", origin: "Oasis" },
            { name: "Dan Allegrone", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Dan Allegrone.jpg", origin: "Oasis" },
            { name: "Daniel Nedelcu", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "David Tranytos", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Deepa Shanmugasundaram", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Donal Casey", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Donal Casey.jpg", origin: "Oasis" },
            { name: "Doug Davis", office: "Dallas", serviceLine: "Sales & Marketing", photo: self.imagePath + "Doug Davis.jpg", origin: "Oasis" },
            { name: "Douglas Couto", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Doug Couto (3).jpg", origin: "Oasis" },
            { name: "Ed Flynn", office: "Boston", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Ed Flynn.jpg", origin: "Oasis" },
            { name: "Elias Pettengill", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Elias Pettengill.jpg", origin: "Oasis" },
            { name: "Emily Alvarez", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Emily Alvarez.jpg", origin: "Oasis" },
            { name: "Eric Lyons", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Gary Leavenworth", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Gary Leavenworth.jpg", origin: "Oasis" },
            { name: "Greg Rice", office: "Los Angeles", serviceLine: "Sales & Marketing", photo: self.imagePath + "Greg Rice.jpg", origin: "Oasis" },
            //TODO Jagmohan Rathore.jpg ?
            { name: "Jake DiMare", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Jake DiMare.jpg", origin: "Oasis" },
            { name: "James Maconochie", office: "Boston", serviceLine: "Account Services", photo: self.imagePath + "James Maconochie.jpg", origin: "Oasis" },
            { name: "Jamie Berman", office: "Dallas", serviceLine: "Account Services", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Jared Arnofsky", office: "Boston", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Jason Fields", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Jason Fields.jpg", origin: "Oasis" },
            { name: "Jeff Conway", office: "New York", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Jeff Conway.jpg", origin: "Oasis" },
            { name: "Jeff McMahon", office: "Boston", serviceLine: "Executive", photo: self.imagePath + "Jeff McMahon.jpg", origin: "Oasis" },
            { name: "John Schneider", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + "John Schneider.png", origin: "Oasis" },
            { name: "Jonah Burstein", office: "Boston", serviceLine: "Account Services", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Jonathan Lane", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Jonathan Lane.jpg", origin: "Oasis" },
            { name: "Josh Bates", office: "Boston", serviceLine: "Delivery Support", photo: self.imagePath + "Joshua Bates.jpg", origin: "Oasis" },
            { name: "Josh Sostek", office: "Boston", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Justin Bradley", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "Justin Bradley.jpg", origin: "Oasis" },
            { name: "Keith Murphy", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Keith Murphy.jpg", origin: "Oasis" },
            { name: "Keith Russell", office: "Boston", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Kelsey Loveday", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Kelsey Loveday.jpg", origin: "Oasis" },
            { name: "Kim Bleiler", office: "Boston", serviceLine: "Finance/HR", photo: self.imagePath + "Kim Bleiler.jpg", origin: "Oasis" },
            { name: "Kirk McPherson", office: "Boston", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Lisa Poirier", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Lisa Poirier.jpg", origin: "Oasis" },
            { name: "Madlene Olander", office: "Boston", serviceLine: "Production", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Magen Stewart", office: "Dallas", serviceLine: "Production", photo: self.imagePath + "Magen Stewart.jpg", origin: "Oasis" },
            { name: "Mark Abbott", office: "Boston", serviceLine: "Sales & Marketing", photo: self.imagePath + "Mark Abbott.jpg", origin: "Oasis" },
            { name: "Mark Graber", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Mark Graber.jpg", origin: "Oasis" },
            { name: "Mark Oglia", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Mark Oglia.jpg", origin: "Oasis" },
            { name: "Mark Ursino", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Mark Ursino.jpg", origin: "Oasis" },
            { name: "Mat Thomas", office: "San Francisco", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Mat Thomas.jpg", origin: "Oasis" },
            { name: "Max Schaefer", office: "Boston", serviceLine: "Production", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Meegan Decker", office: "Atlanta", serviceLine: "Production", photo: self.imagePath + "Meegan Decker.jpg", origin: "Oasis" },
            { name: "Melissa Forrester", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Melissa Forrester.jpg", origin: "Oasis" },
            { name: "Melissa Godden", office: "Boston", serviceLine: "Finance/HR", photo: self.imagePath + "Melissa Godden.jpg", origin: "Oasis" },
            { name: "Mito Are", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Nathan Christopher", office: "Atlanta", serviceLine: "Sales & Marketing", photo: self.imagePath + "Nathan Christopher.jpg", origin: "Oasis" },
            { name: "Nazo Tajrian", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Nazareth Tajrian.jpg", origin: "Oasis" },
            { name: "Nick Laidlaw", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Nick Laidlaw.jpg", origin: "Oasis" },
            { name: "Paschall Freeman", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Paschall Freeman.jpg", origin: "Oasis" },
            { name: "Paul Mathai", office: "Boston", serviceLine: "QA", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Phu-Xuan Le", office: "Atlanta", serviceLine: "Production", photo: self.imagePath + "Phu-Xuan Le.jpg", origin: "Oasis" },
            { name: "Rob Ahnemann", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "Rob Ahnemann.jpg", origin: "Oasis" },
            { name: "Robert Naughton", office: "Boston", serviceLine: "Sales & Marketing", photo: self.imagePath + "Robert Naughton.jpg", origin: "Oasis" },
            { name: "Russell Strauss", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Sarvesh Jain", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Simon Smith", office: "Boston", serviceLine: "Finance/HR", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Stephen Culp", office: "Atlanta", serviceLine: "Account Services", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Stephen Sobenko", office: "Boston", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Terry Han", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Thomas O'Donnell", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Thomas O'Donnell.jpg", origin: "Oasis" },
            //TODO Tim Khasanov.jpg ?
            { name: "Timothy Brown", office: "Boston", serviceLine: "Delivery Support", photo: self.imagePath + "Tim Brown.jpg", origin: "Oasis" },
            { name: "Timothy Seifert", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Tim Seifert.jpg", origin: "Oasis" },
            { name: "TJ Sugnet", office: "San Francisco", serviceLine: "Strategy & User Experience", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Tricia Perez", office: "Dallas", serviceLine: "QA", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Ty Sharp", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" },
            { name: "Tyler Johnston", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + "Tyler Johnston.JPG", origin: "Oasis" },
            { name: "Vadim Dolt", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "Vadim Dolt.jpg", origin: "Oasis" },
            { name: "Walker Harden", office: "Boston", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Walker Harden.jpg", origin: "Oasis" },
            { name: "Wendy Karlyn", office: "Boston", serviceLine: "Delivery", photo: self.imagePath + "NoPhoto.jpg", origin: "Oasis" }

        ];

        var officesHash = {};
        var serviceLinesHash = {};
        var originsHash = {};

        var serviceLinesByOfficeHash = {};
        var officesByServiceLineHash = {};

        var serviceLinesByOriginHash = {};
        var officesByOriginHash = {};

        var i;
        var item;

        for (i = 0; i < data.length; i++) {
            item = data[i];
            officesHash[item.office] = item.office;
            serviceLinesHash[item.serviceLine] = item.serviceLine;
            originsHash[item.origin] = item.origin;

            if (!serviceLinesByOfficeHash[item.office]) {
                serviceLinesByOfficeHash[item.office] = {};
            }
            serviceLinesByOfficeHash[item.office][item.serviceLine] = item.serviceLine;

            if (!officesByServiceLineHash[item.serviceLine]) {
                officesByServiceLineHash[item.serviceLine] = {};
            }
            officesByServiceLineHash[item.serviceLine][item.office] = item.office;

            if (!serviceLinesByOriginHash[item.origin]) {
                serviceLinesByOriginHash[item.origin] = {};
            }
            serviceLinesByOriginHash[item.origin][item.serviceLine] = item.serviceLine;

            if (!officesByOriginHash[item.origin]) {
                officesByOriginHash[item.origin] = {};
            }
            officesByOriginHash[item.origin][item.office] = item.office;
        }

        var key;

        var offices = [];
        for (key in officesHash) {
            offices.push(key);
        }
        offices.sort();
        self.officesAll = offices;

        var serviceLines = [];
        for (key in serviceLinesHash) {
            serviceLines.push(key);
        }
        serviceLines.sort();
        self.serviceLinesAll = serviceLines;

        var origins = [];
        for (key in originsHash) {
            origins.push(key);
        }
        origins.sort();
        self.originsAll = origins;

        self.serviceLinesByOffice([]);
        for (i = 0; i < offices.length; i++) {
            item = { office: offices[i], serviceLines: [] };
            for (key in serviceLinesByOfficeHash[offices[i]]) {
                item.serviceLines.push(key);
            }
            item.serviceLines.sort();
            self.serviceLinesByOffice.push(item);
        }

        self.officesByServiceLine([]);
        for (i = 0; i < serviceLines.length; i++) {
            item = { serviceLine: serviceLines[i], offices: [] };
            for (key in officesByServiceLineHash[serviceLines[i]]) {
                item.offices.push(key);
            }
            item.offices.sort();
            self.officesByServiceLine.push(item);
        }

        self.serviceLinesByOrigin([]);
        for (i = 0; i < origins.length; i++) {
            var item = { origin: origins[i], serviceLines: [] };
            for (key in serviceLinesByOriginHash[origins[i]]) {
                item.serviceLines.push(key);
            }
            item.serviceLines.sort();
            self.serviceLinesByOrigin.push(item);
        }

        self.officesByOrigin([]);
        for (i = 0; i < origins.length; i++) {
            item = { origin: origins[i], offices: [] };
            for (key in officesByOriginHash[origins[i]]) {
                item.offices.push(key);
            }
            item.offices.sort();
            self.officesByOrigin.push(item);
        }
        
        setTimeout(function(){
            deferred.resolve(data);
        }, 0);

        return deferred.promise();
    };

    self.applyFilters = function() {
        var filtered;

        filtered = self.cardsAll().slice();

        pc.common.shuffle(filtered);

        if (self.selectedOffice() !== self.textAnywhere) {
            filtered = filtered.filter(function (currentValue, index, arr) {
                return currentValue.office === self.selectedOffice();
            });
        }
        
        if (self.selectedServiceLine() !== self.textAll) {
            filtered = filtered.filter(function (currentValue, index, arr) {
                return currentValue.serviceLine === self.selectedServiceLine();
            });
        }

        if (self.selectedOrigin() !== self.textAll) {
            filtered = filtered.filter(function (currentValue, index, arr) {
                return currentValue.origin === self.selectedOrigin();
            });
        }

        self.cards([]);
        self.cards(filtered);
        self.loadCardBehavior(self.classCard);
    };

    self.init = function () {
        self.selectedOffice.subscribe(function (newValue) {
            self.applyFilters();
        }, self);

        self.selectedServiceLine.subscribe(function (newValue) {
            self.applyFilters();
        }, self);

        self.selectedOrigin.subscribe(function (newValue) {
            self.applyFilters();
        }, self);

        self.gettingData().done(function(data){
            self.cardsAll(data);

            var copy = data.slice();
            pc.common.shuffle(copy);

            self.cards([]);
            self.cards(copy);
            self.loadCardBehavior(self.classCard);
        });
    };

    self.init();
};
pc.viewModels.CardList.prototype.loadCardBehavior = function(selector){
      var $cards = $(selector);
      //$cards.flip(false);
      $cards.flip();
};
pc.viewModels.CardList.prototype.shuffleCards = function(){
    this.cards(pc.common.shuffle(this.cards()));
};                         