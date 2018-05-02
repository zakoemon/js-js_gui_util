/**
 * config js-file:
 * Defines a mapping that data-object member should be validated with a certain validator
 */

(function()
{

    var validator = gui_util.validator;

    validator.mapping = 
    {
        //first name
        first_name : 
        [
            "firstNameTooLong"
            ,"firstNameNotNull"
            ,"firstNameLastNameAlsoRequired"
        ]
        //last name
        ,last_name : 
        [
            "lastNameTooLong"
            ,"lastNameNotNull"
            ,"lastNameFirstNameAlsoRequired"
        ]

    }

})();