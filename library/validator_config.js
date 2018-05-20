/**
 * config:
 * 
 * mapping) Defines a mapping that data-object member should be validated with a certain validator
 * 
 * types) Defines validators based on the mapping-js file to accomplish "Strategy Pattern"
 * 
 * instructions) Defines which validator casts which error
 * 
 */

(function()
{
    var validator = gui_util.validator;

    validator.setMapping
    ({
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

    });
    validator.setTypes 
    ({
        //first_name
        firstNameTooLong:function(member, object)
        {
            if(!member) return false;
            return member.length > 20;
        }
        ,firstNameNotNull:function(member, object)
        {
            return !member;
        }
        ,firstNameLastNameAlsoRequired:function(member, object)
        {
            return (member && !object.last_name);
        }

        //last_name
        ,lastNameTooLong:function(member, object)
        {
            if(!member) return false;
            return member.length > 20;
        }
        ,lastNameNotNull:function(member, object)
        {
            return !member;
        }
        ,lastNameFirstNameAlsoRequired:function(member, object)
        {
            return (member && !object.first_name);
        }
    });   
    validator.setInstructions
    ({
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
    });

})();