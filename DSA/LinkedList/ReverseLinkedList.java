public class ReverseLinkedList extends MyLinkedList {
	/*
	 * This code is a function that reverses a linked list.
	 * 
	 * It starts at the head of the list, and sets the next node to be the
	 * previous node (initially null). It then sets the current node to be the
	 * next node, and the previous node to be the current node.
	 * 
	 * This process continues until the current node is null. Finally, the head
	 * is set to the previous node.
	 */
	public void reverse() {
		Node prev = null;
		Node curr = head;
		Node next = null;
		while (curr != null) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		head = prev;
	}

	public static void main(String[] args) {
		ReverseLinkedList mList = new ReverseLinkedList();
		mList.add(5);
		mList.add(4);
		mList.add(3);
		mList.add(2);
		mList.add(1);
		System.out.println(mList.toString());
		mList.reverse();
		System.out.println(mList.toString());
	}
}
