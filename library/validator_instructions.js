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
            instruction:'\"first name\" must be within 20 characters'
            //Planning to add a feature that casts errors onto html automatically.
            ,id:''
        }
        ,"firstNameNotNull":
        {
            instruction:'\"first name\" must not be null'
            ,id:''
        }
        ,"firstNameLastNameAlsoRequired":
        {
            instruction:'\"Last name\" must be also filled'
            ,id:''
        }

        //last_name
        ,"lastNameTooLong":
        {
            instruction:'\"Last name\" must be within 20 characters'
            ,id:''
        }
        ,"lastNameNotNull":
        {
            instruction:'\"Last name\" must not be null'
            ,id:''
        }
        ,"lastNameFirstNameAlsoRequired":
        {
            instruction:'\"first name\" must be also filled'
            ,id:''
        }
    }
    
})();