var gui_util = gui_util || 
{
    /**
     * Add class="error" attribute to elements on which you want error messages
     */
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

        ,errorHtmlCollection:null

        /**
         * If there are errors, 
         * this method casts error messages to HTML
         */
        ,castToHtml:function()
        {
            this.resetCastedHtml();

            if(this.errorHtmlCollection){
                var index;
                for(index = 0; index < this.errors.length; index++){
                    console.log(this.errors[index].id + ':' + this.errors[index].instruction);
                    this.errorHtmlCollection[this.errors[index].id].innerHTML += this.errors[index].instruction + '<br/>';
                }
            }
        }

        /**
         * reset error messages laid on HTML before casting another ones
         */
        ,resetCastedHtml:function(){
            var index;
            for(index = 0; index < this.errorHtmlCollection.length; index++){
                this.errorHtmlCollection.item(index).innerHTML = '';
            }         
        }

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
         * @return boolean
         * if true, means "no error"
         * 
         * After executing this method, 
         * check if there are errors by executing 'hasError()'
         */
        ,validate:function(data_object)
        {
            var data_member, type, validate, instruction, index;

            this.errors = [];
            if(!this.errorHtmlCollection) this.errorHtmlCollection = document.getElementsByClassName('error');

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

            if(this.errors.length !== 0)
            {
                this.castToHtml();
                console.log('return false');
                return false;
            }
            else
            {
                console.log('return true');                
                return true;
            }
        }
    }
};