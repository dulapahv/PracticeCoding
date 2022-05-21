// class Animal {
//     String name;

//     Animal(String n) {
//         name = n;
//     }
// }

// class main {
//     public static void main(String[] args) {
//         Animal a1 = new Animal("Nunoko");
//         Animal a2 = new Animal("Nunoko");
//         System.out.println(a1 == a2);  // false
//     }
// }

/*
 * when you compare objects using the equality testing operator (==),
 * it actually compares the references and not the object values.
 * */

class Animal {
    String name;

    Animal(String n) {
        name = n;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Animal other = (Animal) obj;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        return true;
    }
}


class main {
    public static void main(String[] args) {
        Animal a1 = new Animal("Nunoko");
        Animal a2 = new Animal("Nunoko");
        System.out.println(a1.equals(a2));  // true
    }
}
