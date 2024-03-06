using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Net.NetworkInformation;
using WebApplication3.Models;
using System.Data.SqlClient;
using static System.Net.Mime.MediaTypeNames;

namespace WebApplication3.Controllers
{
    public class HomeController : Controller
    {
        SqlCommand com = new SqlCommand();
        SqlDataReader dr;
        SqlConnection con = new SqlConnection();
        List<career> careers = new List<career>();
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
            con.ConnectionString = WebApplication3.Properties.Resources.ConnectionString;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult History()
        {
            return View();
        }

        public IActionResult Company()
        {
            return View();
        }

        public IActionResult Team()
        {
            return View();
        }

        public IActionResult team1()
        {
            return View();
        }

        public IActionResult team2()
        {
            return View();
        }

        public IActionResult team3()
        {
            return View();
        }

        public IActionResult Who_we_are()
        {
            return View();
        }

        public IActionResult Activities()
        {
            return View();
        }

        public IActionResult Policies()
        {
            return View();
        }

        public IActionResult solution()
        {
            return View();
        }

        public IActionResult product()
        {
            return View();
        }

        public IActionResult projects()
        {
            return View();
        }

        public IActionResult partners()
        {
            return View();
        }

        public IActionResult Event()
        {
            return View();
        }

        public IActionResult Blog()
        {
            return View();
        }

        public IActionResult blog_single_three()
        {
            return View();
        }

        public IActionResult blog_single_second()
        {
            return View();
        }

        public IActionResult blog_single_first()
        {
            return View();
        }

        public IActionResult video()
        {
            return View();
        }

        public IActionResult career()
        {
            FetchData();
            return View(careers);
        }

        public void FetchData()
        {
            if (careers.Count > 0)
            {
                careers.Clear();
            }
            try
            {
                con.Open();
                com.Connection = con;
                com.CommandText = "SELECT TOP (1000) [id],[title],[description] FROM [nwwc].[dbo].[uploadjobs]";
                dr = com.ExecuteReader();
                while (dr.Read())
                {
                    careers.Add(new career()
                    {
                        id = dr["id"].ToString(),
                        title = dr["title"].ToString(),
                        description = dr["description"].ToString(),
                    });
                }
                con.Close();
            }
            catch (Exception ex)
            {

            }

        }


        MyDatabase dob1 = new MyDatabase();

        public IActionResult applyform()
        {
            return View();
        }

        [HttpPost]
        public IActionResult applyform([Bind] applyform applyF)
        {
            try
            {

                if (ModelState.IsValid)
                {
                    String res = dob1.applyform(applyF);
                    TempData["msg"] = res;
                }

            }
            catch (Exception ex)
            {
                TempData["msg"] = ex.Message;
            }

            return RedirectToAction("Thankyou");
        }

        public IActionResult admin_login()
        {
            return View();
        }

        

        public IActionResult contact_us()
        {
            return View();
        }

        public IActionResult contact([Bind] Contact contactM)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    String res = dob1.saveRecord(contactM);
                    TempData["msg"] = res;
                }
            }
            catch (Exception ex)
            {
                TempData["msg"] = ex.Message;
            }
            return RedirectToAction("Thankyou");
        }

        public IActionResult Thankyou()
        {
            return View();
        }
        public IActionResult p_2022()
        {
            return View();
        }

        public IActionResult p_2021()
        {
            return View();
        }

        public IActionResult p_2020()
        {
            return View();
        }

        public IActionResult p_2019()
        {
            return View();
        }

        public IActionResult p_2018()
        {
            return View();
        }

        public IActionResult p_2017()
        {
            return View();
        }

        public IActionResult p_2016()
        {
            return View();
        }

        public IActionResult p_2015()
        {
            return View();
        }

        public IActionResult p_2014()
        {
            return View();
        }

        public IActionResult p_2013()
        {
            return View();
        }

        public IActionResult p_2012()
        {
            return View();
        }

        public IActionResult p_2011()
        {
            return View();
        }

        public IActionResult p_2007()
        {
            return View();
        }

        public IActionResult e_2023()
        {
            return View();
        }

        public IActionResult e_2022()
        {
            return View();
        }

        public IActionResult e_2021()
        {
            return View();
        }

        public IActionResult e_2019()
        {
            return View();
        }

        public IActionResult e_2017()
        {
            return View();
        }

        public IActionResult e_2016()
        {
            return View();
        }

        public IActionResult e_2015()
        {
            return View();
        }

        public IActionResult e_2014()
        {
            return View();
        }

        public IActionResult e_2013()
        {
            return View();
        }

        public IActionResult e_2012()
        {
            return View();
        }

        public IActionResult e_2011()
        {
            return View();
        }

        public IActionResult e_2010()
        {
            return View();
        }

        public IActionResult e_2009()
        {
            return View();
        }

        public IActionResult locations()
        {
            return View();
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
