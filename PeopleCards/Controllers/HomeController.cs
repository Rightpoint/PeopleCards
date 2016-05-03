using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace PeopleCards.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Meet your coworkers";

            return View();
        }
    }
}
