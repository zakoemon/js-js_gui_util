var gui_util = gui_util || 
{
    /**
     * Add class="error" attribute to elements on which you want error messages
     */
    validator:(function(){
       /**
         * As for types, instructions, and mapping,
         * add your config onto "validator_config.js"
         */
        var _types = {}
        ,_instructions = {}
        ,_mapping = {};

        function setTypes(type_obj){
            _types = type_obj;
        }

        function setInstructions(instruction_obj){
            _instructions = instruction_obj;
        }

        function setMapping(mapping_obj){
            _mapping = mapping_obj;
        }

        var _errors = []
        ,_errorHtmlCollection = null;

        /**
         * If there are errors, 
         * this method casts error messages to HTML
         */
        var _castToHtml = function()
        {
            _resetCastedHtml();

            if(_errorHtmlCollection){
                var index = 0;
                for(index; index < _errors.length; index++){
                    _errorHtmlCollection[_errors[index].id].innerHTML += _errors[index].instruction + '<br/>';
                }
            }
        };

        /**
         * reset error messages laid on HTML before casting another ones
         */
        var _resetCastedHtml = function(){
            var index = 0;
            for(index; index < _errorHtmlCollection.length; index++){
                _errorHtmlCollection.item(index).innerHTML = '';
            }         
        };

        /**
         * @return boolean
         * After some client function or logic executing 'validate',
         * if true, it indicates there are errors
         */
        var _hasError = function()
        {
            return _errors.length !== 0;
        };

        /**
         * @param object data_object 
         * {key:value, key:value,...,key:value}
         * 
         * @return boolean
         * if true, means "no error"
         * 
         * After executing this method, 
         * check if there are errors by executing 'hasError()'
         */
        var validate = function(data_object)
        {
            var data_member, type, validate, instruction, index;

            _errors = [];
            if(!_errorHtmlCollection) _errorHtmlCollection = document.getElementsByClassName('error');

            for(data_member in data_object)
            {              
                type = null;

                if(data_object.hasOwnProperty(data_member))
                {
                    type = _mapping[data_member];
                    console.log('[data_member]::' + data_member);
                    console.log('[type]::' + type);

                    if(!type) continue;

                    for(index = 0; index < type.length; index++)
                    {

                        validate = null, instruction = null;

                        validate = _types[type[index]];

                        if(!validate) throw 'The following type isn\'t defined yet: ' + type;

                        instruction = _instructions[type[index]];
                        if(!instruction) throw 'The following instruction isn\'t defined yet: ' + type[index];

                        if(validate(data_object[data_member], data_object)) _errors.push(_instructions[type[index]]);
                    }
                }
            } 

            if(_hasError())
            {
                _castToHtml();
                return false;
            }
           
            return true;
            
        };

        return {
            setTypes:setTypes
            ,setInstructions:setInstructions
            ,setMapping:setMapping
            ,validate:validate
        };

    })()
};