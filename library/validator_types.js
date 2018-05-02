/**
 * config js-file:
 * Defines validators based on the mapping-js file to accomplish "Strategy Pattern"
 */

(function()
{

    var validator = gui_util.validator;
    
    validator.types = 
    {
        //first_name
        firstNameTooLong:function(member, object)
        {
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
            return member.length > 20;
        }
        ,lastNameNotNull:function(member, object)
        {
            return !member;
        }
        ,lastNameFirstNameAlsoRequired:function(member, object)
        {
            return (member && !object.first_name)
        }
    }
    
})();