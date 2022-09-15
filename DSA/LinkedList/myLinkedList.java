public class myLinkedList {
	public class Node {
		int data;
		Node next;

		public Node(int d) {
			this.data = d;
		}
	}

	Node head = null;

	/**
	 * Get data from a linked list at the specified index.
	 */
	public int getAt(int i) {
		Node p = head;
		while (i > 0) {
			p = p.next;
			i--;
		}
		return p.data;
	}

	/**
	 * Set data in a linked list at the specified index.
	 */
	public void setAt(int d, int i) {
		Node p = head;
		while (i > 0) {
			p = p.next;
			i--;
		}
		p.data = d;
	}

	/**
	 * Add a data to the front of the linked list.
	 */
	public void add(int d) {
		Node p = new Node(d);
		p.next = head;
		head = p;
	}

	/**
	 * Add a data to the list after the specified node.
	 */
	public void insert(int d, Node p) {
		Node q = new Node(d);
		q.next = p.next;
		p.next = q;
	}

	/**
	 * Delete a data from the list after the specified node.
	 */
	public void delete(Node p) {
		p.next = p.next.next;
	}

	/**
	 * Search for data in linked list
	 * in main(), we must call like this: MyLinkedList.Node p = mList.find(4)
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

	/**
	 * Search for data in linked list and delete it.
	 */
	public void find_delete(int d) {
		Node t = new Node(d + 1);
		t.next = head;
		Node p = t;
		while ((p.next != null) && p.next.data != d) {
			p = p.next;
		}
		if (p.next != null) {
			p.next = p.next.next;
		}
		head = t.next;
	}

	/**
	 * Reverse a linked list
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

	@Override
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