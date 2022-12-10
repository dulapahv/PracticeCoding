public class MyLinkedList {
	public class Node {
		int data;
		Node next;

		public Node(int d) {
			this.data = d;
		}
	}

	Node head = null;

	/*
	 * This code creates a new node with the data value of d, and sets that
	 * node as the head of the linked list.
	 */
	public void add(int d) {
		Node p = new Node(d);
		p.next = head;
		head = p;
	}

	/*
	 * This code is inserting a new node into a linked list.
	 * 
	 * The new node is created with data d. The head node is set to q.
	 * While q has a next node and that next node's data is less than d, q is
	 * set to the next node.
	 * 
	 * After the while loop, the new node's next is set to
	 * q's next and q's next is set to the new node.
	 */
	public void insert(int d) {
		Node p = new Node(d);
		Node q = head;
		while (q.next != null && q.next.data < d) {
			q = q.next;
		}
		p.next = q.next;
		q.next = p;
	}

	/*
	 * The code is a function that finds a node with a specific data value.
	 * 
	 * It starts at the head node, and then iterates through each node until it
	 * finds the desired node. If it doesn't find the node, it returns null.
	 */
	public Node find(int d) {
		Node p = head;
		while (p != null) {
			if (p.data == d)
				return p;
			p = p.next;
		}
		return null;
	}

	/*
	 * This code creates a new node, t, with data d + 1 and head as its
	 * next node.
	 * 
	 * It then creates a node, p, that is set to t. While p's next node is not
	 * null and p's next node's data is d, p is set to p's next node.
	 * If p's next node is not null, p's next node is set to p's next node's
	 * next node. Finally, head is set to t's next node.
	 */
	public void delete(int d) {
		Node t = new Node(d + 1);
		t.next = head;
		Node p = t;
		while ((p.next != null) && (p.next.data == d)) {
			p = p.next;
		}
		if (p.next != null) {
			p.next = p.next.next;
		}
		head = t.next;
	}

	public String toString() {
		StringBuffer sb = new StringBuffer("head ");
		Node p = head;
		while (p != null) {
			sb.append("--> [");
			sb.append(p.data);
			sb.append("]");
			p = p.next;
		}
		sb.append("-> null");
		return new String(sb);
	}
}