pc.viewModels.CardList = function (){
    var self = this;

    self.imagePath = "Content/Images/People/";
    self.noPhotoFile = "NoPhoto.jpg";
    self.classCard = ".card";

    self.textAll = "All";
    self.textAnywhere = "Anywhere";

    self.serviceLinesAll = [];
    self.serviceLines = ko.observableArray([self.textAll]);
    self.selectedServiceLine = ko.observable(self.textAll);

    self.officesAll = [];
    self.offices = ko.observableArray([self.textAnywhere]);
    self.selectedOffice = ko.observable(self.textAnywhere);

    self.originsAll = [];
    self.origins = ko.observableArray([self.textAll]);
    self.selectedOrigin = ko.observable(self.textAll);

    self.serviceLinesByOffice = {};
    self.officesByServiceLine = {};

    self.serviceLinesByOrigin = {};
    self.officesByOrigin = {};

    self.originsByServiceLine = {};
    self.originsByOffice = {};

    self.cardsAll = ko.observableArray([]);
    self.cards = ko.observableArray([]);

    self.gettingData = function(){
        var deferred = $.Deferred();

        var data = [
            { name: "Aaron Starkston", office: "Chicago", serviceLine: "App Dev", photo: self.imagePath + "Aaron Starkston.JPG", origin: "Rightpoint" },
            { name: "Adam Burton", office: "Chicago", serviceLine: "Digital Strategy", photo: self.imagePath + "AdamBurton.jpg", origin: "Rightpoint" },
            { name: "Addam Wassel", office: "Detroit", serviceLine: "App Dev", photo: self.imagePath + "Addam Wassel.jpg", origin: "Rightpoint" },
            { name: "Aditya	Mehra", office: "Chicago", serviceLine: "PMO", photo: self.imagePath + "Aditya Mehra.JPG", origin: "Rightpoint" },
            { name: "Adrian	Widjaja", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "Adrian Widjaja.jpg", origin: "Rightpoint" },
            { name: "Aja Shamblee", office: "Chicago", serviceLine: "Creative", photo: self.imagePath + "AjaShamblee.jpg", origin: "Rightpoint" },
            { name: "Aleksandr Zebrov", office: "Chicago", serviceLine: "Managed Services", photo: self.imagePath + "Alex Zebrov.png", origin: "Rightpoint" },
            { name: "Alex Swarthout", office: "Chicago", serviceLine: "Delivery Support/Operations", photo: self.imagePath + "AlexSwarthout.jpg", origin: "Rightpoint" },
            { name: "Ali Quadri", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Ali Quadri.png", origin: "Rightpoint" },
            { name: "Allie Gauthier", office: "Chicago", serviceLine: "Delivery Support/Recruiting", photo: self.imagePath + "Allie Gauthier.jpg", origin: "Rightpoint" },
            { name: "Allison Baniecki", office: "Chicago", serviceLine: "Delivery Support/Operations", photo: self.imagePath + "Allison Baniecki.jpg", origin: "Rightpoint" },
            { name: "Amanda Thomas", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "Amanda Thomas.JPG", origin: "Rightpoint" },
            { name: "Anamika Lasser", office: "Chicago", serviceLine: "Design", photo: self.imagePath + "Anamicak Lasser.jpg", origin: "Rightpoint" },
            { name: "Anastasia Severin", office: "Chicago", serviceLine: "Delivery Support/Accounting", photo: self.imagePath + "Anastasia Severin.jpg", origin: "Rightpoint" },
            { name: "Andre Figueroa", office: "Chicago", serviceLine: "Cloud and Infrastructure", photo: self.imagePath + "Andre Figueroa.jpg", origin: "Rightpoint" },
            { name: "Andrew Varnon", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Andrew Varnon.JPG", origin: "Rightpoint" },
            { name: "Andy Bateman", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "AndyBateman.jpg", origin: "Rightpoint" },
            { name: "Anna Trivino", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Anna Trivino.jpg", origin: "Rightpoint" },
            { name: "Anne Petersen", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Anne Petersen.JPG", origin: "Rightpoint" },
            { name: "Austin Smith", office: "Chicago", serviceLine: "Visual Design", photo: self.imagePath + "AustinSmith.jpg", origin: "Rightpoint" },
            { name: "Austin Strajack", office: "Chicago", serviceLine: "Business Development", photo: self.imagePath + "Austin Strajack.JPG", origin: "Rightpoint" },
            { name: "Barbara Kubas", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "BarbaraKubas.jpg", origin: "Rightpoint" },
            { name: "Bartel Welch", office: "Detroit", serviceLine: "Application Development", photo: self.imagePath + "Bartel Welch.png", origin: "Rightpoint" },
            { name: "Bethany Steffen", office: "Chicago", serviceLine: "Business Development", photo: self.imagePath + "Bethany Steffen.JPG", origin: "Rightpoint" },
            { name: "Brad Kramer", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Brad Kramer.JPG", origin: "Rightpoint" },
            { name: "Brad Schneider", office: "Chicago", serviceLine: "Co-founder", photo: self.imagePath + "Brad Schneider.jpg", origin: "Rightpoint" },
            { name: "Brad Vesprini", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Brad Vesprini.JPG", origin: "Rightpoint" },
            { name: "Brandon Barnett", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Brandon Barnett.JPG", origin: "Rightpoint" },
            { name: "Brandon Rozelle", office: "Chicago", serviceLine: "Go-to-Market", photo: self.imagePath + "Brandon Rozelle.jpg", origin: "Rightpoint" },
            { name: "Brennen Cage", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Brennen Cage.jpg", origin: "Rightpoint" },
            { name: "Brian Bennewitz", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Brian Bennewitz.jpg", origin: "Rightpoint" },
            { name: "Brian Hulse", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Brian Hulse.JPG", origin: "Rightpoint" },
            { name: "Bryan Bruno", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "Bryan Bruno.jpg", origin: "Rightpoint" },
            { name: "Cami Davis", office: "Chicago", serviceLine: "Business Development", photo: self.imagePath + "Cami Davis.jpg", origin: "Rightpoint" },
            { name: "Carlee Wolfe", office: "Chicago", serviceLine: "Change Management", photo: self.imagePath + "CarleeWolfe.jpg", origin: "Rightpoint" },
            { name: "Chris Domino", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Chris Domino.jpg", origin: "Rightpoint" },
            { name: "Chris Esposito", office: "Chicago", serviceLine: "Delivery Support/Operations", photo: self.imagePath + "Chris Esposito.JPG", origin: "Rightpoint" },
            { name: "Chris Leporini", office: "Chicago", serviceLine: "Content Strategy", photo: self.imagePath + "Chris Leporini.JPG", origin: "Rightpoint" },
            { name: "Chris Miller", office: "Chicago", serviceLine: "Business Development", photo: self.imagePath + "Chris Miller.jpg", origin: "Rightpoint" },
            { name: "Chris Niemyjski", office: "Chicago", serviceLine: "Content Strategy", photo: self.imagePath + "Chris Niemyjski.jpg", origin: "Rightpoint" },
            { name: "Christian Fitzsimonds", office: "Detroit", serviceLine: "Application Development", photo: self.imagePath + "ChristianFitzsimonds.jpg", origin: "Rightpoint" },
            { name: "Christine Bussey", office: "Detroit", serviceLine: "Project Management", photo: self.imagePath + "Christine Bussey.jpg", origin: "Rightpoint" },
            { name: "Christopher Vazquez", office: "Chicago", serviceLine: "Delivery Support/Accounting", photo: self.imagePath + "Chris Vazquez.jpg", origin: "Rightpoint" },
            { name: "Colin DeClue", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Colin DeClue.JPG", origin: "Rightpoint" },
            { name: "Craig Browder", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "CraigBrowder.jpg", origin: "Rightpoint" },
            { name: "Craig Gadberry", office: "Chicago", serviceLine: "Business Development", photo: self.imagePath + "Craig Gadberry.jpg", origin: "Rightpoint" },
            { name: "Dan Adams", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "Dan Adams.jpg", origin: "Rightpoint" },
            { name: "Dan Costanzo", office: "Chicago", serviceLine: "Business Development", photo: self.imagePath + "DanCostanzo.jpg", origin: "Rightpoint" },
            { name: "Daniel Marushka", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Daniel Marushka.jpg", origin: "Rightpoint" },
            { name: "Darren Berry", office: "Detroit", serviceLine: "Cloud and Infrastructure", photo: self.imagePath + "DarrenBerry.jpg", origin: "Rightpoint" },
            { name: "David Domm", office: "Chicago", serviceLine: "R&D", photo: self.imagePath + "DavidDomm.jpg", origin: "Rightpoint" },
            { name: "David McChristie", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "Dave McChristie.jpg", origin: "Rightpoint" },
            { name: "David Snuckel", office: "Detroit", serviceLine: "Cloud and Infrastructure", photo: self.imagePath + "Dave Snuckel.jpg", origin: "Rightpoint" },
            { name: "Dax Scott", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Dax Scott.JPG", origin: "Rightpoint" },
            { name: "Derek Gusoff", office: "Detroit", serviceLine: "Application Development", photo: self.imagePath + "Derek Gusoff.jpg", origin: "Rightpoint" },
            { name: "Derek Poppink", office: "Detroit", serviceLine: "User Experience", photo: self.imagePath + "Derek Poppink.jpg", origin: "Rightpoint" },
            { name: "Dev Deol", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Dev Deol.png", origin: "Rightpoint" },
            { name: "Drew Null", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Drew Null.JPG", origin: "Rightpoint" },
            { name: "Emily Olson", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "EmilyOlson.jpg", origin: "Rightpoint" },
            { name: "Erik Abderhalden", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "Erik Abderhalden.JPG", origin: "Rightpoint" },
            { name: "Evan Cobb", office: "Chicago", serviceLine: "Delivery Support/Recruiting", photo: self.imagePath + "Evan Cobb.jpg", origin: "Rightpoint" },
            { name: "Gabriel Bridger", office: "Chicago", serviceLine: "Strategy and Planning", photo: self.imagePath + "Gabe Bridger Pic.JPG", origin: "Rightpoint" },
            { name: "Gabriel Streza", office: "Chicago", serviceLine: "Managed Services", photo: self.imagePath + "Gabe Streza.jpg", origin: "Rightpoint" },
            { name: "Gautam Jaiswal", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "GautamJaiswal.jpg", origin: "Rightpoint" },
            { name: "Gina Lee", office: "Chicago", serviceLine: "Visual Design", photo: self.imagePath + "GinaLee.jpg", origin: "Rightpoint" },
            { name: "Greg Ostrowski", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Greg Ostrowski.JPG", origin: "Rightpoint" },
            { name: "Hiren Patel", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Greg Ostrowski.JPG", origin: "Rightpoint" },
            { name: "Jaime Velez", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "JaimeVelez.jpg", origin: "Rightpoint" },
            { name: "James Mburu", office: "Chicago", serviceLine: "Business Intelligence", photo: self.imagePath + "James Mburu.jpg", origin: "Rightpoint" },
            { name: "James Mueller", office: "Chicago", serviceLine: "Client Partner", photo: self.imagePath + "JayMueller.jpg", origin: "Rightpoint" },
            { name: "Janna Cenko", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "Janna Cenko.jpg", origin: "Rightpoint" },
            { name: "Jason Abrams", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Jason Abrams.jpg", origin: "Rightpoint" },
            { name: "Jason Janiak", office: "Chicago", serviceLine: "Cloud and Infrastructure", photo: self.imagePath + "Jason Janiak.jpg", origin: "Rightpoint" },
            { name: "Jason McDermott", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Jason McDermott.jpg", origin: "Rightpoint" },
            { name: "Jason Prell", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Jason Prell.JPG", origin: "Rightpoint" },
            { name: "Jason Sears", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Jason Sears.JPG", origin: "Rightpoint" },
            { name: "Jason Shutters", office: "Chicago", serviceLine: "Business Intelligence", photo: self.imagePath + "Jason Shutters.JPG", origin: "Rightpoint" },
            { name: "Jason Vanderbilt", office: "Chicago", serviceLine: "Managed Services", photo: self.imagePath + "Jason Vanderbilt.JPG", origin: "Rightpoint" },
            { name: "Jeff Small", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "JeffSmall.jpg", origin: "Rightpoint" },
            { name: "Jeff Willinger", office: "Chicago", serviceLine: "Business Development", photo: self.imagePath + "Jeff Willinger.jpg", origin: "Rightpoint" },
            { name: "Jeremy Dedic", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Jeremy Dedic.JPG", origin: "Rightpoint" },
            { name: "Jeremy Williams", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "Jeremy Williams.jpg", origin: "Rightpoint" },
            { name: "Jesse Murray", office: "Detroit", serviceLine: "Application Development", photo: self.imagePath + "Jesse Murray.png", origin: "Rightpoint" },
            { name: "Jesse Wilbur", office: "Chicago", serviceLine: "Strategy and Planning", photo: self.imagePath + "Jesse Wilbur.jpg", origin: "Rightpoint" },
            { name: "Jilla Malek", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Jilla Malek.JPG", origin: "Rightpoint" },
            { name: "Jim Noellsch", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Jim Noellsch.jpg", origin: "Rightpoint" },
            { name: "Jimmy Hopton", office: "Chicago", serviceLine: "Visual Design", photo: self.imagePath + "JimmyHopton.jpg", origin: "Rightpoint" },
            { name: "Joaquin Grimaldo", office: "Chicago", serviceLine: "Visual Design", photo: self.imagePath + "Joaquin Grimaldo.JPG", origin: "Rightpoint" },
            { name: "Jobin Ephrem", office: "Chicago", serviceLine: "Go-to-Market", photo: self.imagePath + "Jobin Ephrem.jpg", origin: "Rightpoint" },
            { name: "Joe Dunne", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Joe Dunne.jpg", origin: "Rightpoint" },
            { name: "Joe Meyer", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Joe Meyer.JPG", origin: "Rightpoint" },
            { name: "Joel Kienitz", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Joel Kienitz.jpg", origin: "Rightpoint" },
            { name: "John Ingraffia", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "JohnIngraffia.jpg", origin: "Rightpoint" },
            { name: "John Purnell", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "John Purnell.JPG", origin: "Rightpoint" },
            { name: "Jon Biere", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Jon Biere.jpg", origin: "Rightpoint" },
            { name: "Jon Oestermeyer", office: "Chicago", serviceLine: "Cloud and Infrastructure", photo: self.imagePath + "Jon O.jpg", origin: "Rightpoint" },
            { name: "Jon Samp", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Jon Samp.jpg", origin: "Rightpoint" },
            { name: "Jonathan Dominguez", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Jonathan Dominguez.jpg", origin: "Rightpoint" },
            { name: "Jonathan Rupp", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Jonathan Rupp.jpg", origin: "Rightpoint" },
            { name: "Joseph Lee", office: "Chicago", serviceLine: "Managed Services", photo: self.imagePath + "Joseph Lee.jpg", origin: "Rightpoint" },
            { name: "Josh Eberhardy", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Josh Eberhardy.JPG", origin: "Rightpoint" },
            { name: "Joshua Chung", office: "Chicago", serviceLine: "Business Intelligence", photo: self.imagePath + "Joshua Chung.jpg", origin: "Rightpoint" },
            { name: "Julie Lewis", office: "Chicago", serviceLine: "Delivery Support/Accounting", photo: self.imagePath + "Julie Lewis.jpg", origin: "Rightpoint" },
            { name: "Kareem Hindi", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Kareem Hindi.jpg", origin: "Rightpoint" },
            { name: "Karen Dringenberg", office: "Chicago", serviceLine: "Visual Design", photo: self.imagePath + "Karen Dringenberg.JPG", origin: "Rightpoint" },
            { name: "Kathryn Ciaralli", office: "Denver", serviceLine: "SharePoint", photo: self.imagePath + "Kathryn Ciaralli.jpg", origin: "Rightpoint" },
            { name: "Keith Thompson", office: "Chicago", serviceLine: "Managed Services", photo: self.imagePath + "Keith Thompson.jpg", origin: "Rightpoint" },
            { name: "Kelly Noah", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Kelly Noah.jpg", origin: "Rightpoint" },
            { name: "Kevin Newhouse", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Kevin Newhouse.jpg", origin: "Rightpoint" },
            { name: "Kevin Prescott", office: "Detroit", serviceLine: "Business Development", photo: self.imagePath + "Kevin Prescott.JPG", origin: "Rightpoint" },
            { name: "Khader Abdul", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Khader Abdul.jpg", origin: "Rightpoint" },
            { name: "Kia Horton", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Kia Horton.JPG", origin: "Rightpoint" },
            { name: "Kimberly Arakelian", office: "Chicago", serviceLine: "Content Strategy", photo: self.imagePath + "Kimberly Arakelian.jpg", origin: "Rightpoint" },
            { name: "Kiran Kakanur", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "Kiran Kakanur.JPG", origin: "Rightpoint" },
            { name: "Kristine Slaboszewski", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Kristine Slaboszewski.JPG", origin: "Rightpoint" },
            { name: "Krystal Blesi", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "KrystalBlesi.jpg", origin: "Rightpoint" },
            { name: "Laraib Jafri", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "Laraib Jafri.jpg", origin: "Rightpoint" },
            { name: "Laurel Petty", office: "Chicago", serviceLine: "Visual Design", photo: self.imagePath + "LaurelPetty.jpg", origin: "Rightpoint" },
            { name: "Lauren Berkowitz", office: "Chicago", serviceLine: "Delivery Support/HR", photo: self.imagePath + "Lauren Berkowitz.jpg", origin: "Rightpoint" },
            { name: "Lauren Helwig", office: "Detroit", serviceLine: "User Experience", photo: self.imagePath + "Lauren Helwig.jpg", origin: "Rightpoint" },
            { name: "Leslie Gestautas", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "Leslie Gaustautas.jpg", origin: "Rightpoint" },
            { name: "Leslie Lockett", office: "Detroit", serviceLine: "Delivery Support/Operations", photo: self.imagePath + "LeslieLockett.jpg", origin: "Rightpoint" },
            { name: "Lindsay Baehren", office: "Chicago", serviceLine: "Delivery Support/Operations", photo: self.imagePath + "Lindsay Baehren.jpg", origin: "Rightpoint" },
            { name: "Lisa DiPiero", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Lisa DiPiero.jpg", origin: "Rightpoint" },
            { name: "Lisa Legro", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Lisa Legro.jpg", origin: "Rightpoint" },
            { name: "Liz Sdregas", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Liz Sdregas.JPG", origin: "Rightpoint" },
            { name: "Luke Hitpas", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "Luke Hitpas.JPG", origin: "Rightpoint" },
            { name: "Marcy Boesen", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Marcy Boesen.jpg", origin: "Rightpoint" },
            { name: "Maris Pukitis", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Maris Pukitis.jpg", origin: "Rightpoint" },
            { name: "Mark Drespling", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Mark Drespling.jpg", origin: "Rightpoint" },
            { name: "Mark MacDonald", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Mark MacDonald.JPG", origin: "Rightpoint" },
            { name: "Matt Boreen", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "Matt Boreen.JPG", origin: "Rightpoint" },
            { name: "Matt Butz", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Matt Butz.jpg", origin: "Rightpoint" },
            { name: "Matt Klein", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Matt Klein.jpg", origin: "Rightpoint" },
            { name: "Matt Schaub", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Matt Schaub.jpg", origin: "Rightpoint" },
            { name: "Megan Williams", office: "Chicago", serviceLine: "Content Strategy", photo: self.imagePath + "Megan Williams.jpg", origin: "Rightpoint" },
            { name: "Melissa Leffin", office: "Chicago", serviceLine: "Change Management", photo: self.imagePath + "Melissa Leffin.jpg", origin: "Rightpoint" },
            { name: "Melissa Paris", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Melissa Paris.JPG", origin: "Rightpoint" },
            { name: "Micah Swigert", office: "Chicago", serviceLine: "Go-to-Market", photo: self.imagePath + "Micah Swigert.JPG", origin: "Rightpoint" },
            { name: "Michael Becker", office: "Chicago", serviceLine: "QA", photo: self.imagePath + "Mike Becker.JPG", origin: "Rightpoint" },
            { name: "Michael McDermott", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Mike McDermott.JPG", origin: "Rightpoint" },
            { name: "Michael Weisert", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Mike Weisert.jpg", origin: "Rightpoint" },
            { name: "Mike Horner", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Mike Horner.jpg", origin: "Rightpoint" },
            { name: "Mike Marnocha", office: "Detroit", serviceLine: "Application Development", photo: self.imagePath + "Mike Marnocha.jpg", origin: "Rightpoint" },
            { name: "Nathaniel Emerick", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Nathaniel Emerick.JPG", origin: "Rightpoint" },
            { name: "Naveed Lakhani", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Naveed Lakhani.JPG", origin: "Rightpoint" },
            { name: "Neal Levin", office: "Chicago", serviceLine: "Go-to-Market", photo: self.imagePath + "Neal Levin.JPG", origin: "Rightpoint" },
            { name: "Neal Rudnick", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Neal Rudnick.jpg", origin: "Rightpoint" },
            { name: "Nerijus Baniukevicius", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Nerijus Baniukevicius.jpg", origin: "Rightpoint" },
            { name: "Nicholas Shank", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Nick Shank.jpg", origin: "Rightpoint" },
            { name: "Nick Carlson", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "NickCarlson.jpg", origin: "Rightpoint" },
            { name: "Nick Groos", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Nick Groos.png", origin: "Rightpoint" },
            { name: "Nicole Lambiase", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Nicole Lambiase.jpg", origin: "Rightpoint" },
            { name: "Owen Craig", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "OwenCraig.jpg", origin: "Rightpoint" },
            { name: "Paul Dain", office: "Chicago", serviceLine: "Client Partner", photo: self.imagePath + self.noPhotoFile, origin: "Rightpoint" },
            { name: "Paul Hermany", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Paul Hermany.jpg", origin: "Rightpoint" },
            { name: "Paul McAleer", office: "Denver", serviceLine: "User Experience", photo: self.imagePath + "Paul McAleer.JPG", origin: "Rightpoint" },
            { name: "Pernilla Peterson", office: "Chicago", serviceLine: "Visual Design", photo: self.imagePath + "Pernilla Peterson.JPG", origin: "Rightpoint" },
            { name: "Pete Zeman", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Pete Zeman.JPG", origin: "Rightpoint" },
            { name: "Peter Clark", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Peter Clark.jpg", origin: "Rightpoint" },
            { name: "Peter O'Connell", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "Peter OConnell.jpg", origin: "Rightpoint" },
            { name: "Phil Paris", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Phil Paris.JPG", origin: "Rightpoint" },
            { name: "Rachel Zinser", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Rachel Zinser.jpg", origin: "Rightpoint" },
            { name: "Rafal Farmas", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Rafal Farmas.JPG", origin: "Rightpoint" },
            { name: "Ram Kota", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "RamKota.jpg", origin: "Rightpoint" },
            { name: "Rebecca LaRue", office: "Chicago", serviceLine: "Visual Design", photo: self.imagePath + "Rebecca LaRue.JPG", origin: "Rightpoint" },
            { name: "Rebecca Steurer", office: "Chicago", serviceLine: "Content Strategy", photo: self.imagePath + "RebeccaSteurer.jpg", origin: "Rightpoint" },
            { name: "Rejaie Johnson", office: "Denver", serviceLine: "Application Development", photo: self.imagePath + "Rajaie Johnson.jpg", origin: "Rightpoint" },
            { name: "Rich Grenwick", office: "Detroit", serviceLine: "Application Development", photo: self.imagePath + "RichGrenwick.jpg", origin: "Rightpoint" },
            { name: "Robin Schaffer", office: "Denver", serviceLine: "Business Development", photo: self.imagePath + "RobinSchaffer.jpg", origin: "Rightpoint" },
            { name: "Ron Scheuman", office: "Chicago", serviceLine: "Delivery Support/Operations", photo: self.imagePath + "Ron Scheuman.jpg", origin: "Rightpoint" },
            { name: "Ross Freedman", office: "Chicago", serviceLine: "Co-founder", photo: self.imagePath + "Ross Freedman.jpg", origin: "Rightpoint" },
            { name: "Ross Updegraff", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Ross Updegraff.jpg", origin: "Rightpoint" },
            { name: "Ryan Corliss", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "Ryan Corliss.JPG", origin: "Rightpoint" },
            { name: "Ryan Snyder", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "Ryan Snyder.jpg", origin: "Rightpoint" },
            { name: "Ryan Sullivan", office: "Chicago", serviceLine: "Managed Services", photo: self.imagePath + "Ryan Sullivan.JPG", origin: "Rightpoint" },
            { name: "Sanjeev Karmacharya", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "SanjeevKarmacharya.jpg", origin: "Rightpoint" },
            { name: "Sarah Derry", office: "Chicago", serviceLine: "Marketing", photo: self.imagePath + "SarahDerry.jpg", origin: "Rightpoint" },
            { name: "Sarah Umber", office: "Chicago", serviceLine: "Delivery Support/HR", photo: self.imagePath + "Sarah Umber.JPG", origin: "Rightpoint" },
            { name: "Sarah Wallace", office: "Chicago", serviceLine: "User Experience", photo: self.imagePath + "Sarah Wallace.JPG", origin: "Rightpoint" },
            { name: "Scot Goodhart", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Scot Goodhart Pic.JPG", origin: "Rightpoint" },
            { name: "Scott Hamilton", office: "Chicago", serviceLine: "Business Development", photo: self.imagePath + "Scott Hamilton.JPG", origin: "Rightpoint" },
            { name: "Scott Rojas", office: "Chicago", serviceLine: "Project Management", photo: self.imagePath + "ScottRojas.jpg", origin: "Rightpoint" },
            { name: "Sean Sartell", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Sean Sartell.JPG", origin: "Rightpoint" },
            { name: "Shweta Singh", office: "Chicago", serviceLine: "Business Intelligence", photo: self.imagePath + "Shweta Singh.jpg", origin: "Rightpoint" },
            { name: "Sona Allen", office: "Chicago", serviceLine: "Visual Design", photo: self.imagePath + "Sona Allen.JPG", origin: "Rightpoint" },
            { name: "Sreeni Amrutur", office: "Detroit", serviceLine: "SharePoint", photo: self.imagePath + "SreeniAmrutur.jpg", origin: "Rightpoint" },
            { name: "Steve Dykstra", office: "Detroit", serviceLine: "Project Management", photo: self.imagePath + "SteveDykstra.jpg", origin: "Rightpoint" },
            { name: "Steve Ross", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "Steve Ross.JPG", origin: "Rightpoint" },
            { name: "Steve Samnadda", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Steve Samnadda.jpg", origin: "Rightpoint" },
            { name: "Steve Tonkin", office: "Denver", serviceLine: "SharePoint", photo: self.imagePath + "Steve Tonkin.JPG", origin: "Rightpoint" },
            { name: "Steven Mierop", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Steven Mierop.png", origin: "Rightpoint" },
            { name: "Steven Schnorr", office: "Chicago", serviceLine: "Salesforce", photo: self.imagePath + "Steven Schnorr.jpg", origin: "Rightpoint" },
            { name: "Suman Kamath", office: "Denver", serviceLine: "Project Management", photo: self.imagePath + "SumanKamath.jpg", origin: "Rightpoint" },
            { name: "Syed Belgam", office: "Chicago", serviceLine: "Managed Services", photo: self.imagePath + "SyedBelgam.jpg", origin: "Rightpoint" },
            { name: "Tegan Wilson", office: "Denver", serviceLine: "Application Development", photo: self.imagePath + "Tegan Wilson.jpg", origin: "Rightpoint" },
            { name: "Thomas White", office: "Detroit", serviceLine: "Application Development", photo: self.imagePath + "Tom White.jpg", origin: "Rightpoint" },
            { name: "Tim Chantome", office: "Chicago", serviceLine: "Application Development", photo: self.imagePath + "Tim Chantome.JPG", origin: "Rightpoint" },
            { name: "Tim Kippley", office: "Chicago", serviceLine: "Go-to-Market", photo: self.imagePath + "Tim Kippley.JPG", origin: "Rightpoint" },
            { name: "Tim Stahl", office: "Chicago", serviceLine: "Visual Design", photo: self.imagePath + "Tim Stahl.jpg", origin: "Rightpoint" },
            { name: "Tom Keuten", office: "Detroit", serviceLine: "Business Development", photo: self.imagePath + "TomKeuten.jpg", origin: "Rightpoint" },
            { name: "Vaiva Vaisnys", office: "Chicago", serviceLine: "Delivery Support/HR", photo: self.imagePath + "Vaiva Vaisnys.JPG", origin: "Rightpoint" },
            { name: "Victoria Nahas", office: "Chicago", serviceLine: "Recruiter", photo: self.imagePath + "VictoriaNahas.jpg", origin: "Rightpoint" },
            { name: "Zach Quinn", office: "Chicago", serviceLine: "Cloud and Infrastructure", photo: self.imagePath + "Zach Quinn.jpg", origin: "Rightpoint" },
            { name: "Zachary Kelemen", office: "Chicago", serviceLine: "SharePoint", photo: self.imagePath + "Zack Kelemen.jpg", origin: "Rightpoint" },

            { name: "Allison Pitre", office: "Boston", serviceLine: "Finance/HR", photo: self.imagePath + "Allison Pitre.jpg", origin: "Oasis" },
            { name: "Abhinay Jain", office: "Jaipur, India", serviceLine: "Development", photo: self.imagePath + "Abhinay Jain.jpg", origin: "Oasis" },
            { name: "Aniket Gadre", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Aniket Gadre.jpg", origin: "Oasis" },
            { name: "Ariana Ross", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Ariana Ross.jpg", origin: "Oasis" },
            { name: "Benjamin Sewards", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Benjamin Sewards.jpg", origin: "Oasis" },
            { name: "Bill Gonzalez", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Bill Gonzalez.jpg", origin: "Oasis" },
            { name: "Brandon Lackey", office: "Dallas", serviceLine: "Development", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Brendan Pugh", office: "Boston", serviceLine: "Account Services", photo: self.imagePath + "Brendan Pugh.jpg", origin: "Oasis" },
            { name: "Carolina Coviello", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Cassi Pires", office: "Los Angeles", serviceLine: "Account Services", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Catherine Renehan", office: "Boston", serviceLine: "Production", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Cerina Epple", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Charles Brooks", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Chris Crombie", office: "Boston", serviceLine: "Sales & Marketing", photo: self.imagePath + "Chris Crombie.jpg", origin: "Oasis" },
            { name: "Christina Hunchard", office: "Boston", serviceLine: "Account Services", photo: self.imagePath + "Christina Hunchard.jpg", origin: "Oasis" },
            { name: "Christopher Daly", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Chris Daly.jpg", origin: "Oasis" },
            { name: "Colin Azeltine", office: "San Francisco", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Colin Azeltine.jpg", origin: "Oasis" },
            { name: "Craig Kublin", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Craig Kublin.jpg", origin: "Oasis" },
            { name: "Dale Traxler", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "Dale Traxler.jpg", origin: "Oasis" },
            { name: "Dan Allegrone", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Dan Allegrone.jpg", origin: "Oasis" },
            { name: "Daniel Nedelcu", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "David Tranytos", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "David Tranytos.jpg", origin: "Oasis" },
            { name: "Deepa Shanmugasundaram", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "Deepa Shanmugasundaram.jpg", origin: "Oasis" },
            { name: "Donal Casey", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Donal Casey.jpg", origin: "Oasis" },
            { name: "Doug Davis", office: "Dallas", serviceLine: "Sales & Marketing", photo: self.imagePath + "Doug Davis.jpg", origin: "Oasis" },
            { name: "Douglas Couto", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Doug Couto.jpg", origin: "Oasis" },
            { name: "Ed Flynn", office: "Boston", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Ed Flynn.jpg", origin: "Oasis" },
            { name: "Elias Pettengill", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Elias Pettengill.jpg", origin: "Oasis" },
            { name: "Emily Alvarez", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Emily Alvarez.jpg", origin: "Oasis" },
            { name: "Eric Lyons", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + "Eric Lyons.JPG", origin: "Oasis" },
            { name: "Gary Leavenworth", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Gary Leavenworth.jpg", origin: "Oasis" },
            { name: "Gaurav Agarwal", office: "Jaipur, India", serviceLine: "Development", photo: self.imagePath + "Gaurav Agarwal.png", origin: "Oasis" },
            { name: "Greg Rice", office: "Los Angeles", serviceLine: "Sales & Marketing", photo: self.imagePath + "Greg Rice.jpg", origin: "Oasis" },
            { name: "Jagmohan Rathore", office: "Jaipur, India", serviceLine: "Development", photo: self.imagePath + "Jagmohan Rathore.jpg", origin: "Oasis" },
            { name: "Jake DiMare", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Jake DiMare.jpg", origin: "Oasis" },
            { name: "James Maconochie", office: "Boston", serviceLine: "Account Services", photo: self.imagePath + "James Maconochie.jpg", origin: "Oasis" },
            { name: "Jamie Berman", office: "Dallas", serviceLine: "Account Services", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Jared Arnofsky", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Jared Arnofsky.png", origin: "Oasis" },
            { name: "Jason Fields", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Jason Fields.jpg", origin: "Oasis" },
            { name: "Jeff Conway", office: "New York", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Jeff Conway.jpg", origin: "Oasis" },
            { name: "Jeff McMahon", office: "Boston", serviceLine: "Co-founder", photo: self.imagePath + "Jeff McMahon.jpg", origin: "Oasis" },
            { name: "John Schneider", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + "John Schneider.png", origin: "Oasis" },
            { name: "Jonah Burstein", office: "Boston", serviceLine: "Account Services", photo: self.imagePath + "Jonah Burstein.jpg", origin: "Oasis" },
            { name: "Jonathan Lane", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Jonathan Lane.jpg", origin: "Oasis" },
            { name: "Josh Bates", office: "Boston", serviceLine: "Delivery Support", photo: self.imagePath + "Joshua Bates.jpg", origin: "Oasis" },
            { name: "Josh Sostek", office: "Boston", serviceLine: "Development", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Justin Bradley", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "Justin Bradley.jpg", origin: "Oasis" },
            { name: "Kapil Trivedi", office: "Jaipur, India", serviceLine: "Development", photo: self.imagePath + "Kapil Trivedi.jpg", origin: "Oasis" },
            { name: "Keith Murphy", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Keith Murphy.jpg", origin: "Oasis" },
            { name: "Keith Russell", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Keith Russell.jpg", origin: "Oasis" },
            { name: "Kelsey Loveday", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Kelsey Loveday.jpg", origin: "Oasis" },
            { name: "Kim Bleiler", office: "Boston", serviceLine: "Finance/HR", photo: self.imagePath + "Kim Bleiler.jpg", origin: "Oasis" },
            { name: "Kirk McPherson", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Kirk McPherson.jpg", origin: "Oasis" },
            { name: "Lisa Poirier", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Lisa Poirier.jpg", origin: "Oasis" },
            { name: "Madlene Olander", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Madlene Olander.jpg", origin: "Oasis" },
            { name: "Magen Stewart", office: "Dallas", serviceLine: "Production", photo: self.imagePath + "Magen Stewart.jpg", origin: "Oasis" },
            { name: "Mahendra Shekhawat", office: "Jaipur, India", serviceLine: "Development", photo: self.imagePath + "Mahendra Shekhawat.png", origin: "Oasis" },
            { name: "Mark Abbott", office: "Boston", serviceLine: "Sales & Marketing", photo: self.imagePath + "Mark Abbott.jpg", origin: "Oasis" },
            { name: "Mark Graber", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Mark Graber.jpg", origin: "Oasis" },
            { name: "Mark Oglia", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Mark Oglia.jpg", origin: "Oasis" },
            { name: "Mark Ursino", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Mark Ursino.jpg", origin: "Oasis" },
            { name: "Mat Thomas", office: "San Francisco", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Mat Thomas.jpg", origin: "Oasis" },
            { name: "Max Schaefer", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Max Schaefer.jpg", origin: "Oasis" },
            { name: "Meegan Decker", office: "Atlanta", serviceLine: "Production", photo: self.imagePath + "Meegan Decker.jpg", origin: "Oasis" },
            { name: "Melissa Forrester", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Melissa Forrester.jpg", origin: "Oasis" },
            { name: "Melissa Godden", office: "Boston", serviceLine: "Finance/HR", photo: self.imagePath + "Melissa Godden.jpg", origin: "Oasis" },
            { name: "Mito Are", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "Mito Are.jpg", origin: "Oasis" },
            { name: "Nathan Christopher", office: "Atlanta", serviceLine: "Sales & Marketing", photo: self.imagePath + "Nathan Christopher.jpg", origin: "Oasis" },
            { name: "Nazo Tajrian", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Nazareth Tajrian.jpg", origin: "Oasis" },
            { name: "Nick Laidlaw", office: "Boston", serviceLine: "Co-founder", photo: self.imagePath + "Nick Laidlaw.jpg", origin: "Oasis" },
            { name: "Paschall Freeman", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Paschall Freeman.jpg", origin: "Oasis" },
            { name: "Paul Mathai", office: "Boston", serviceLine: "QA", photo: self.imagePath + "Paul Mathai.png", origin: "Oasis" },
            { name: "Phu-Xuan Le", office: "Atlanta", serviceLine: "Production", photo: self.imagePath + "Phu-Xuan Le.jpg", origin: "Oasis" },
            { name: "Praful Jangid", office: "Jaipur, India", serviceLine: "Development", photo: self.imagePath + "Praful Jangid.JPG", origin: "Oasis" },
            { name: "Praveen Soni", office: "Jaipur, India", serviceLine: "Development", photo: self.imagePath + "Praveen Soni.png", origin: "Oasis" },
            { name: "Ravindra S. Rathore", office: "Jaipur, India", serviceLine: "Development", photo: self.imagePath + "Ravindra Singh Rathore.jpg", origin: "Oasis" },
            { name: "Rishiraj Shekhawat", office: "Jaipur, India", serviceLine: "Development", photo: self.imagePath + "Rishiraj Shekhawat.png", origin: "Oasis" },
            { name: "Rob Ahnemann", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "Rob Ahnemann.jpg", origin: "Oasis" },
            { name: "Robert Naughton", office: "Boston", serviceLine: "Co-founder", photo: self.imagePath + "Robert Naughton.jpg", origin: "Oasis" },
            { name: "Russell Strauss", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + "Russell Strauss.jpg", origin: "Oasis" },
            { name: "Sakshi Tejpal", office: "Jaipur, India", serviceLine: "Finance/HR", photo: self.imagePath + "Sakshi Tejpal.jpg", origin: "Oasis" },
            { name: "Sarvesh Jain", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Simon Smith", office: "Boston", serviceLine: "Finance/HR", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Stephen Culp", office: "Atlanta", serviceLine: "Account Services", photo: self.imagePath + "Stephen Culp.JPG", origin: "Oasis" },
            { name: "Stephen Sobenko", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Steve Sobenko.jpg", origin: "Oasis" },
            { name: "Terry Han", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Thomas O'Donnell", office: "Boston", serviceLine: "Production", photo: self.imagePath + "Thomas O'Donnell.jpg", origin: "Oasis" },
            //TODO Tim Khasanov.jpg ?
            { name: "Timothy Brown", office: "Boston", serviceLine: "Delivery Support", photo: self.imagePath + "Tim Brown.jpg", origin: "Oasis" },
            { name: "Timothy Seifert", office: "Boston", serviceLine: "Development", photo: self.imagePath + "Tim Seifert.jpg", origin: "Oasis" },
            { name: "TJ Sugnet", office: "San Francisco", serviceLine: "Strategy & User Experience", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Tricia Perez", office: "Dallas", serviceLine: "QA", photo: self.imagePath + "Tricia Perez.jpg", origin: "Oasis" },
            { name: "Ty Sharp", office: "Los Angeles", serviceLine: "Strategy & User Experience", photo: self.imagePath + self.noPhotoFile, origin: "Oasis" },
            { name: "Tyler Johnston", office: "Atlanta", serviceLine: "Development", photo: self.imagePath + "Tyler Johnston.JPG", origin: "Oasis" },
            { name: "Vadim Dolt", office: "Dallas", serviceLine: "Development", photo: self.imagePath + "Vadim Dolt.jpg", origin: "Oasis" },
            { name: "Vipin Banka", office: "Jaipur, India", serviceLine: "Development", photo: self.imagePath + "Vipin Banka.jpg", origin: "Oasis" },
            { name: "Walker Harden", office: "Boston", serviceLine: "Strategy & User Experience", photo: self.imagePath + "Walker Harden.jpg", origin: "Oasis" },
            { name: "Wendy Karlyn", office: "Boston", serviceLine: "Delivery", photo: self.imagePath + "Wendy Karlyn.png", origin: "Oasis" }

        ];

        self.collateData(data);
        
        setTimeout(function(){
            deferred.resolve(data);
        }, 0);

        return deferred.promise();
    };

    self.collateData = function(data) {
        if (data) {
            var officesHash = {};
            var serviceLinesHash = {};
            var originsHash = {};

            var serviceLinesByOfficeHash = {};
            var officesByServiceLineHash = {};

            var serviceLinesByOriginHash = {};
            var officesByOriginHash = {};

            var originsByServiceLineHash = {};
            var originsByOfficeHash = {};

            var i;
            var item;

            var missingPhotos = [];

            for (i = 0; i < data.length; i++) {
                item = data[i];

                if (item.photo.indexOf(self.noPhotoFile) > -1) {
                    missingPhotos.push(item.name + " - " + item.office);
                }

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

                if (!originsByServiceLineHash[item.serviceLine]) {
                    originsByServiceLineHash[item.serviceLine] = {};
                }
                originsByServiceLineHash[item.serviceLine][item.origin] = item.origin;

                if (!originsByOfficeHash[item.office]) {
                    originsByOfficeHash[item.office] = {};
                }
                originsByOfficeHash[item.office][item.origin] = item.origin;
            }

            for (i = 0; i < missingPhotos.length; i++) {
                console.log(missingPhotos[i]);
            }

            var key;

            var offices = [];
            for (key in officesHash) {
                offices.push(key);
            }
            offices.sort();
            self.officesAll = offices;

            ko.utils.arrayPushAll(self.offices(), offices);
            self.offices.valueHasMutated();

            var serviceLines = [];
            for (key in serviceLinesHash) {
                serviceLines.push(key);
            }
            serviceLines.sort();
            self.serviceLinesAll = serviceLines;

            ko.utils.arrayPushAll(self.serviceLines(), serviceLines);
            self.serviceLines.valueHasMutated();

            var origins = [];
            for (key in originsHash) {
                origins.push(key);
            }
            origins.sort();
            self.originsAll = origins;

            ko.utils.arrayPushAll(self.origins(), origins);
            self.origins.valueHasMutated();

            self.serviceLinesByOffice = {};
            for (i = 0; i < offices.length; i++) {
                item = { serviceLines: [] };
                for (key in serviceLinesByOfficeHash[offices[i]]) {
                    item.serviceLines.push(key);
                }
                item.serviceLines.sort();
                self.serviceLinesByOffice[offices[i]] = item;
            }

            self.officesByServiceLine = {};
            for (i = 0; i < serviceLines.length; i++) {
                item = { offices: [] };
                for (key in officesByServiceLineHash[serviceLines[i]]) {
                    item.offices.push(key);
                }
                item.offices.sort();
                self.officesByServiceLine[serviceLines[i]] = item;
            }

            self.serviceLinesByOrigin = {};
            for (i = 0; i < origins.length; i++) {
                var item = { serviceLines: [] };
                for (key in serviceLinesByOriginHash[origins[i]]) {
                    item.serviceLines.push(key);
                }
                item.serviceLines.sort();
                self.serviceLinesByOrigin[origins[i]] = item;
            }

            self.officesByOrigin = {};
            for (i = 0; i < origins.length; i++) {
                item = { offices: [] };
                for (key in officesByOriginHash[origins[i]]) {
                    item.offices.push(key);
                }
                item.offices.sort();
                self.officesByOrigin[origins[i]] = item;
            }

            self.originsByServiceLine = {};
            for (i = 0; i < serviceLines.length; i++) {
                var item = { origins: [] };
                for (key in originsByServiceLineHash[serviceLines[i]]) {
                    item.origins.push(key);
                }
                item.origins.sort();
                self.originsByServiceLine[serviceLines[i]] = item;
            }

            self.originsByOffice = {};
            for (i = 0; i < offices.length; i++) {
                item = { origins: [] };
                for (key in originsByOfficeHash[offices[i]]) {
                    item.origins.push(key);
                }
                item.origins.sort();
                self.originsByOffice[offices[i]] = item;
            }
        }
    };

    self.applyFiltersPeople = function () {

        if (self.isBuildingFilters === true) {
            return;
        }

        var filtered;

        filtered = self.cardsAll().slice();

        pc.common.shuffle(filtered);

        var selectedOffice = self.selectedOffice();

        if (selectedOffice !== self.textAnywhere) {
            filtered = filtered.filter(function (currentValue, index, arr) {
                return currentValue.office === selectedOffice;
            });
        }

        var selectedServiceLine = self.selectedServiceLine();
        
        if (selectedServiceLine !== self.textAll) {
            filtered = filtered.filter(function (currentValue, index, arr) {
                return currentValue.serviceLine === selectedServiceLine;
            });
        }

        var selectedOrigin = self.selectedOrigin();

        if (selectedOrigin !== self.textAll) {
            filtered = filtered.filter(function (currentValue, index, arr) {
                return currentValue.origin === selectedOrigin;
            });
        }

        self.cards([]);
        self.cards(filtered);
        self.loadCardBehavior(self.classCard);
    };

    self.applyFiltersFilters = function() {

        if (self.isBuildingFilters === true) {
            return;
        }

        self.isBuildingFilters = true;

        var officesFiltered = self.officesAll.slice();
        var serviceLinesFiltered = self.serviceLinesAll.slice();
        var originsFiltered = self.originsAll.slice();

        var selectedOffice = self.selectedOffice();

        var item;

        if (selectedOffice !== self.textAnywhere) {
            item = self.serviceLinesByOffice[selectedOffice];
            serviceLinesFiltered = serviceLinesFiltered.filter(function(currentValue, index, arr) {
                return item.serviceLines.indexOf(currentValue) > -1;
            });

            item = self.originsByOffice[selectedOffice];
            originsFiltered = originsFiltered.filter(function(currentValue, index, arr) {
                return item.origins.indexOf(currentValue) > -1;
            });
        }

        var selectedServiceLine = self.selectedServiceLine();

        if (selectedServiceLine !== self.textAll) {
            item = self.officesByServiceLine[selectedServiceLine];
            officesFiltered = officesFiltered.filter(function(currentValue, index, arr) {
                return item.offices.indexOf(currentValue) > -1;
            });

            item = self.originsByServiceLine[selectedServiceLine];
            originsFiltered = originsFiltered.filter(function(currentValue, index, arr) {
                return item.origins.indexOf(currentValue) > -1;
            });
        }

        var selectedOrigin = self.selectedOrigin();

        if (selectedOrigin !== self.textAll) {
            item = self.serviceLinesByOrigin[selectedOrigin];
            serviceLinesFiltered = serviceLinesFiltered.filter(function(currentValue, index, arr) {
                return item.serviceLines.indexOf(currentValue) > -1;
            });

            item = self.officesByOrigin[selectedOrigin];
            officesFiltered = officesFiltered.filter(function(currentValue, index, arr) {
                return item.offices.indexOf(currentValue) > -1;
            });
        }

        self.origins([self.textAll]);
        ko.utils.arrayPushAll(self.origins(), originsFiltered);
        self.origins.valueHasMutated();

        if (self.origins().indexOf(selectedOrigin) === -1) {
            self.selectedOrigin(self.textAll);
        } else {
            self.selectedOrigin(selectedOrigin);
        }

        if (self.origins().length === 2 && self.selectedOrigin() === self.textAll) {
            self.origins([self.origins()[1]]);
            self.selectedOrigin(self.origins()[0]);
        }

        self.serviceLines([self.textAll]);
        ko.utils.arrayPushAll(self.serviceLines(), serviceLinesFiltered);
        self.serviceLines.valueHasMutated();

        if (self.serviceLines().indexOf(selectedServiceLine) === -1) {
            self.selectedServiceLine(self.textAll);
        } else {
            self.selectedServiceLine(selectedServiceLine);
        }

        if (self.serviceLines().length === 2 && self.selectedServiceLine() === self.textAll) {
            self.serviceLines([self.serviceLines()[1]]);
            self.selectedServiceLine(self.serviceLines()[0]);
        }

        self.offices([self.textAnywhere]);
        ko.utils.arrayPushAll(self.offices(), officesFiltered);
        self.offices.valueHasMutated();

        if (self.offices().indexOf(selectedOffice) === -1) {
            self.selectedOffice(self.textAnywhere);
        } else {
            self.selectedOffice(selectedOffice);
        }

        if (self.offices().length === 2 && self.selectedOffice() === self.textAnywhere) {
            self.offices([self.offices()[1]]);
            self.selectedOffice(self.offices()[0]);
        }

        self.isBuildingFilters = false;
    };

    self.isBuildingFilters = false;

    self.resetFilters = function () {
        self.isBuildingFilters = true;
        self.selectedServiceLine(self.textAll);
        self.selectedOffice(self.textAnywhere);
        self.selectedOrigin(self.textAll);
        self.isBuildingFilters = false;

        self.applyFiltersFilters();
        self.applyFiltersPeople();
    };

    self.unflipAll = function () {
        var filtered = self.cards().slice();
        self.cards([]);
        self.cards(filtered);
        self.loadCardBehavior(self.classCard);
    };

    self.init = function () {
        self.selectedOffice.subscribe(function (newValue) {
            self.applyFiltersFilters();
            self.applyFiltersPeople();
        }, self);

        self.selectedServiceLine.subscribe(function (newValue) {
            self.applyFiltersFilters();
            self.applyFiltersPeople();
        }, self);

        self.selectedOrigin.subscribe(function (newValue) {
            self.applyFiltersFilters();
            self.applyFiltersPeople();
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