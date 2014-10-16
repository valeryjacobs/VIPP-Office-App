using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WordAppWeb.Controllers
{
    public class PatientController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Patient> Get()
        {
            return new List<Patient>  { new Patient{Name="Patient1", Id = 1}, new Patient{Name = "Patient2", Id=2}};
        }

        // GET api/<controller>/5
        public Patient Get(int id)
        {
            return new Patient { Name = "FoundPAtient" , Id = 3, Medicine = "Morfine"};
        }

      
    }

    public class Patient
    {
        public string Name { get; set; }

        public int Id { get; set; }

        public string Medicine { get; set; }
    }
}