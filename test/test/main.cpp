#include "node.hpp"
#include "tree.hpp"

int main() {
    Tree tree;

    tree.Insert(1, DATA(0));
    tree.Insert(0, DATA(121));
    tree.Insert(6, DATA(1));
    tree.Insert(2, DATA(225));
    tree.Insert(14, DATA(9));
    tree.Insert(12, DATA(16));
    tree.Insert(7, DATA(36));
    tree.Insert(8, DATA(169));
    tree.Insert(9, DATA(196));
    tree.Insert(10, DATA(324));
    tree.Insert(17, DATA(25));
    tree.Insert(15, DATA(100));
    tree.Insert(19, DATA(49));
    tree.Insert(18, DATA(81));

    tree.Remove(7);

    tree.Print();

    return 0;
}
