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
        root = new Node(key, data);
    }
    else {
        root->Insert(key, data);
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
    RemoveNode(root, key);
}

Node* Tree::RemoveNode(Node* node, int key)
{
    if (node == nullptr) {
        return nullptr;
    }

    if (key < node->First()) {
        node->Left = RemoveNode(node->Left, key);
    }
    else if (key > node->First()) {
        node->Right = RemoveNode(node->Right, key);
    }
    else {
        if (node->Left == nullptr && node->Right == nullptr) {
            delete node;
            return nullptr;
        }
        else if (node->Left == nullptr) {
            Node* temp = node->Right;
            delete node;
            return temp;
        }
        else if (node->Right == nullptr) {
            Node* temp = node->Left;
            delete node;
            return temp;
        }
        else {
            Node* temp = FindMin(node->Right);
            node->Key = temp->Key;
            node->Right = RemoveNode(node->Right, temp->Key);
        }
    }
    return node;
}

Node* Tree::FindMin(Node* node) {
    while (node && node->Left != nullptr) {
        node = node->Left;
    }
    return node;
}

void Tree::Print() {
    if (root == nullptr) {
        std::cout << "Empty Tree" << std::endl;
        return;
    }

    int length = Length();
    std::cout << "Tree Length = " << length << std::endl;

    std::vector<bool> ids;
    root->PrintNode(0, ids);
}
