
using System.Data;
using System.Data.SqlClient;
using WebApplication3.Models;
using static System.Net.Mime.MediaTypeNames;

namespace WebApplication3.Models
{
    public class MyDatabase
    {
        SqlConnection conn = new SqlConnection("Data Source='DESKTOP-43APSVA';database='nwwc';integrated security = SSPI;");

        public string saveRecord(Contact contactM)
        {
            try
            {
                conn.Open();
                string query = "insert into contact values ('" + contactM.name + "','" + contactM.address + "','" + contactM.phone + "','" + contactM.subject + "','" + contactM.message + "')";

                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.ExecuteNonQuery();

                conn.Close();
                return ("Ok");
            }
            catch (Exception ex)
            {

                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
                return (ex.Message.ToString());
            }
        }










        public string applyform(applyform applyF)
        {
            try
            {
                conn.Open();
                string query = "insert into applyform values ('" + applyF.namef + "','" + applyF.names + "','" + applyF.namel + "','" + applyF.gender + "','" + applyF.address + "','" + applyF.phone + "','" + applyF.city + "','" + applyF.nationality + "','" + applyF.specialization + "','" + applyF.appreciation + "','" + applyF.graduation + "','" + applyF.education + "','" + applyF.jobtitle + "','" + applyF.experience + "','" + applyF.currentsalary + "','" + applyF.message + "','" + applyF.selectjob + "')";

                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.ExecuteNonQuery();

                conn.Close();
                return ("Ok");
            }
            catch (Exception ex)
            {

                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
                return (ex.Message.ToString());
            }
        }
    }
}
