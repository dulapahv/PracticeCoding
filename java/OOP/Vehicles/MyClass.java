class myClass {
    public static void main(String[] args) {
        Vehicle v1 = new Vehicle();
        Vehicle v2 = new Vehicle();
        v2.horn();
        
        v1.setColor("Red");
        System.out.println(v1.getColor());
    }
}