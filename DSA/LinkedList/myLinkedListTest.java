public class myLinkedListTest {
	public static void main(String[] args) {
		myLinkedList myList = new myLinkedList();

		myList.add(1);
		myList.add(2);
		myList.add(3);

		System.out.println(myList);

		myList.find_delete(1);

		System.out.println(myList);
	} 
}
