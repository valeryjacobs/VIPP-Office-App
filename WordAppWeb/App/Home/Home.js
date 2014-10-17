/// <reference path="../App.js" />

(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            var viewModel = {
                statusText: ko.observable(),
                patients: ko.observable(),
                getPatientData: function () {
                    $.ajax({
                        url: '../../api/Patient/' + this.Id(),
                        type: 'GET'
                    }).done(function (data) {
                        Bind('PatientName', data.Name);
                        Bind('Gender', data.Gender);
                        Bind('Height', String(data.Height));
                        Bind('Weight', String(data.Weight));
                        Bind('BloodType', data.BloodType);
                        Bind('Cholesterol', String(data.Cholesterol));
                        Bind('HeartRate', String(data.HeartRate));
                        Bind('DateOfBirth', moment(data.DateOfBirth).format('M-D-YYYY'));
                        Bind('BloodPressure', String(data.BloodPressure));
                        Bind('BloodGlucose', String(data.BloodGlucose));
                    });
                }
            };

            viewModel.statusText('Contacting backend...');
            
            //Get patient list data.
            $.ajax({
                url: '../../api/Patient',
                type: 'GET'
            }
                ).done(function (data) {
                    viewModel.patients = ko.mapping.fromJS(data);
                    viewModel.statusText('');

                    ko.applyBindings(viewModel, document.getElementById("bodyElement"));
                }).fail(function (status)
                {
                    if (status.status == 500) {
                         viewModel.statusText('Check your connectivity settings! (For those who demo this locally: Check the SQL Database firewall settings.)');
                    }
                    else {
                         viewModel.statusText(status.message);
                    }

                    ko.applyBindings(viewModel, document.getElementById("bodyElement"));
                });
        });
    };

    //Bind patient data to document template.
    function Bind(placeholderName, content) {
        Office.context.document.bindings.addFromNamedItemAsync(placeholderName, "text", { id: placeholderName + '_id' }, function (result) {
            if (result.status == "failed") {
                //if (result.error.message == "The named item does not exist.")
            }
            else {
                Office.select("bindings#" + placeholderName + '_id').setDataAsync(content);
            }
        });
    }
})();