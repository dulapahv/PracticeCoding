public class GetMiddleLinkedList extends MyLinkedList {
	/*
	 * This code returns the value stored in the middle node of a linked list.
	 * 
	 * The first while loop calculates the size of the list. The second for loop
	 * traverses through the list until it reaches the middle node.
	 */
	public int getMiddle() {
		int size = 0;
		Node p = head;
		while (p != null) {
			size++;
			p = p.next;
		}
		int middle = size / 2;
		p = head;
		for (int i = 0; i < middle; i++) {
			p = p.next;
		}
		return p.data;
	}

	public static void main(String[] args) {
		GetMiddleLinkedList mList = new GetMiddleLinkedList();
		mList.add(5);
		mList.add(4);
		mList.add(3);
		mList.add(2);
		mList.add(1);
		System.out.println(mList.toString());
		System.out.println(mList.getMiddle());
	}
}
