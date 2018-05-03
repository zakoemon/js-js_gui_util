/**
 * config js-file:
 * Defines which validator casts which error
 */

(function()
{
    var validator = gui_util.validator;

    validator.instructions = 
    {
        //first_name
        "firstNameTooLong":
        {
            //error message
            instruction:'\"first name\" must be within 20 characters'
            //element's id on which you want to cast the error message
            ,id:'first_name_err'
        }
        ,"firstNameNotNull":
        {
            instruction:'\"first name\" must not be null'
            ,id:'first_name_err'
        }
        ,"firstNameLastNameAlsoRequired":
        {
            instruction:'\"Last name\" must be also filled'
            ,id:'first_name_err'
        }

        //last_name
        ,"lastNameTooLong":
        {
            instruction:'\"Last name\" must be within 20 characters'
            ,id:'last_name_err'
        }
        ,"lastNameNotNull":
        {
            instruction:'\"Last name\" must not be null'
            ,id:'last_name_err'
        }
        ,"lastNameFirstNameAlsoRequired":
        {
            instruction:'\"first name\" must be also filled'
            ,id:'last_name_err'
        }
    }
    
})();