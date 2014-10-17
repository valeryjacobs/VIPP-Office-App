using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WordAppWeb.Models;
using WordAppWeb.ViewModel;
using WordAppWeb;

namespace WordAppWeb.Controllers
{
    public class PatientController : ApiController
    {
        public IEnumerable<PatientViewModel> Get()
        {
            var patients = new List<PatientViewModel>();

            foreach (Patient pat in Global.DBContext.Patients)
            {
                patients.Add(new PatientViewModel
                {
                    Id = pat.PatientID,
                    Name = pat.FirstName + " " + pat.LastName,
                    DateOfBirth = pat.DOB
                });
            }

            return patients;
        }

        // GET api/<controller>/5
        public PatientViewModel Get(int id)
        {
            using (var ctx = new DEMO_EMREntities())
            {
                var pat = ctx.Patients.Where(x => x.PatientID == id).Single();

                var vitals = pat.PatientVitals.First();

                return new PatientViewModel
                {
                    Id = pat.PatientID,
                    Name = pat.FirstName + " " + pat.LastName,
                    BloodPressure = vitals.BP_Systolic + "/" + vitals.BP_Diastolic,
                    BloodType = vitals.BloodType,
                    Cholesterol = int.Parse(vitals.Cholesterol),
                    DateOfBirth = pat.DOB,
                    Gender = pat.Gender,
                    HeartRate = (int)vitals.Pulse,
                    Height = int.Parse(vitals.Height),
                    Weight = int.Parse(vitals.Weight),
                    BloodGlucose = int.Parse(vitals.BloodGlucose)
                };
            }
        }


    }
}