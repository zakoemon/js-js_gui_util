var gui_util = gui_util || 
{
    validator:
    {
        /**
         * As for types, instructions, and mapping,
         * add your config onto three defferent js-files
         */
        types:{}
        ,instructions:{}
        ,mapping:{}

        ,errors:[]

        /**
         * @return boolean
         * After some client function or logic executing 'validate',
         * if true, it indicates there are errors
         */
        ,hasError:function()
        {
            return this.errors.length !== 0;
        }

        /**
         * @param object data_object 
         * {key:value, key:value,...,key:value}
         * 
         * After executing this method, 
         * check if there are errors by executing 'hasError()'
         */
        ,validate:function(data_object)
        {
            var data_member, type, validate, instruction, index;

            this.errors = [];

            for(data_member in data_object)
            {              
                type = null;

                if(data_object.hasOwnProperty(data_member))
                {
                    type = this.mapping[data_member];

                    if(!type) continue;

                    for(index = 0; index < type.length; index++)
                    {

                        validate = null, instruction = null;

                        validate = this.types[type[index]];
                        if(!validate) throw 'The following type isn\'t defined yet: ' + type;

                        instruction = this.instructions[type[index]];
                        if(!instruction) throw 'The following instruction isn\'t defined yet: ' + type[index];

                        if(validate(data_object[data_member], data_object)) this.errors.push(this.instructions[type[index]]);
                    }
                }
            } 
        }
    }
};