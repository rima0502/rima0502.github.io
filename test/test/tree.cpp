#include "tree.hpp"
#include <iostream>
#include <stack>
#include <vector>
#include <utility> // for std::pair
#include <algorithm> // for std::sort

Tree::Tree(const std::vector<std::pair<int, int>>& Nodes) : root(nullptr) {
    for (const auto& node : Nodes) 
    {
        Insert(node.first, DATA(node.second));
    }
}

Tree::~Tree() {
    Clear();
    delete root;
    root = nullptr;
}

void Tree::Insert(int key, DATA data) {
    if (root == nullptr) {
        root = new Node(key, data);  // Ʈ���� ��� ������ ��Ʈ ��带 ����
    }
    else {
        root->Insert(key, data);  // ��Ʈ ��尡 ������ �ش� ��忡�� ���� ����
    }
}

Node* Tree::Find(int key) {
    Node* current = root;
    while (current) {
        if (key == current->First()) {
            return current;
        }
        else if (key < current->First()) {
            current = current->Left;
        }
        else {
            current = current->Right;
        }
    }
    return nullptr;
}

Node* Tree::Root() {
    return root;
}

int Tree::Length() {
    return root ? root->CalculateLength() : 0;
}

void Tree::Clear() {
    if (root == nullptr)
        return;
 
    delete root;
     root = nullptr;
}

void Tree::Remove(int key)
{
    std::stack<Node*> cont;
    Tree* p = nullptr;
    Node* it = p->Find(key);
    if (it != nullptr)
    {
        cont.push(it->Left);
        cont.push(it->Right);
    }



    Tree* u;
    Node* l = u->Find(key);
    while (l->Left != nullptr || l->Right != nullptr)
    {
        l = l->Left;
    }
    Node* r = u->Find(key);
    while (r->Right != nullptr || r->Left != nullptr)
    {
        r = r->Right;
    }
}

void Tree::Print() {
    if (root == nullptr) {
        std::cout << "Empty Tree" << std::endl;
        return;
    }

    int length = Length(); // Ʈ���� ���̸� ���
    std::cout << "Tree Length = " << length << std::endl;

    // ��Ʈ ��带 �������� ���
    std::vector<bool> ids;
    root->PrintNode(0, ids);
}
