/*
 * This code is checking if a linked list is a palindrome.
 * It does this by having a slow and fast node, where the slow node moves
 * one node at a time and the fast node moves two nodes at a time. This means
 * that when the fast node reaches the end of the list, the slow node will be
 * in the middle.
 * 
 * It then sets the secondHalf equal to the node after the slow node, and sets
 * slow.next to null. This separates the list into two separate halves.
 * 
 * It then sets up a while loop to reverse the second half of the list.
 * 
 * Once the second half is reversed, it sets firstHalf equal to the head and
 * then checks if the data of each node in firstHalf and secondHalf are equal.
 * If they are all equal, it returns true, meaning the list is a palindrome.
 */
public class isPalindromLinkedList extends MyLinkedList {
	public boolean isPalindrome() {
		Node slow = head;
		Node fast = head;
		while (fast != null && fast.next != null) {
			slow = slow.next;
			fast = fast.next.next;
		}
		Node secondHalf = slow.next;
		slow.next = null;
		Node prev = null;
		Node curr = secondHalf;
		Node next = null;
		while (curr != null) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		Node firstHalf = head;
		while (prev != null) {
			if (prev.data != firstHalf.data)
				return false;
			prev = prev.next;
			firstHalf = firstHalf.next;
		}
		return true;
	}

	public static void main(String[] args) {
		isPalindromLinkedList mList1 = new isPalindromLinkedList();
		mList1.add(5);
		mList1.add(4);
		mList1.add(3);
		mList1.add(2);
		mList1.add(1);
		System.out.println(mList1.toString());
		System.out.println(mList1.isPalindrome());

		isPalindromLinkedList mList2 = new isPalindromLinkedList();
		mList2.add(1);
		mList2.add(2);
		mList2.add(3);
		mList2.add(2);
		mList2.add(1);
		System.out.println(mList2.toString());
		System.out.println(mList2.isPalindrome());
	}
}