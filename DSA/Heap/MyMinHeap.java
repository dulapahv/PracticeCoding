public class MyMinHeap {
	int MAX_SIZE = 100;
	int heap[] = new int[MAX_SIZE];
	int size = 0;

	void swap(int a, int b) {
		int temp = heap[a];
		heap[a] = heap[b];
		heap[b] = temp;
	}

	/*
	 * This code is used to insert an element into a heap.
	 * 
	 * The element is inserted at the end of the heap, and then the element is
	 * compared to its parent. If the element is smaller than its parent,
	 * the element is swapped with its parent. This process continues until the
	 * element is in the correct position in the heap.
	 */
	public void insert(int d) {
		int p = size++;
		heap[p] = d;
		int parent = (p - 1) / 2;
		while ((p > 0) && (heap[p] < heap[parent])) {
			swap(p, parent);
			p = parent;
			parent = (p - 1) / 2;
		}
	}

	/*
	 * This code is used to delete the minimum element from a heap.
	 * 
	 * The minimum element is deleted by swapping the minimum element with the
	 * last element in the heap. The size of the heap is then decremented by 1.
	 * The new minimum element is then compared to its children. If the minimum
	 * element is larger than either of its children, the minimum element is
	 * swapped with the smaller of its children. This process continues until the
	 * minimum element is in the correct position in the heap.
	 */
	public int remove() {
		int d = heap[0];
		heap[0] = heap[--size];
		int p = 0;
		while (true) {
			int left = 2 * p + 1;
			if (left >= size)
				break; // no child
			int right = 2 * p + 2;
			if (right == size) { // one child
				if (heap[p] > heap[left])
					swap(p, left);
				break; // no more child, nothing to do
			} else { // two childs
				int q = (heap[left] < heap[right]) ? left : right;
				if (heap[p] > heap[q])
					swap(p, q);
				else
					break;
				p = q;
			}
		} // end while
		return d;
	}

	public int peek() {
		return heap[0];
	}

	public boolean isFull() {
		return size == MAX_SIZE;
	}

	public boolean isEmpty() {
		return size == 0;
	}

	public String toString() {
		StringBuffer sb = new StringBuffer();
		sb.append("[ ");
		for (int i = 0; i < size; i++) {
			sb.append(heap[i]).append(" ");
		}
		sb.append("]");
		return sb.toString();
	}
}
