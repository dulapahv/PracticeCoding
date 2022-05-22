/*
Because a superclass-type variable can come from many subclass-types creations.
use the operator instanceof to check its subclass-type.
*/

import java.util.List;

class main {
    public static void main(String[] args) { }
    
    private int getDefaultSize(Object object) {
        if (object instanceof String) {
            return ((String) object).length();
        }
        else if (object instanceof List) {
            return ((List) object).size();
        }
        return 0;
    }
}
