#include "node.hpp"
#include <algorithm>
#include <iostream>


int Node::First() {
    return Key;
}

DATA Node::Second() {
    return data;
}

void Node::PrintNode(int depth, std::vector<bool> ids) 
{
    for (int i = 0; i < depth - 1; i++) {
        if (ids[i]) {
            std::cout << "   ";
        }
        else {
            std::cout << " | ";
        }
    }

    if (depth > 0) {
        if (ids[depth - 1]) {
            std::cout << " +-[ ";
        }
        else {
            std::cout << " +-[ ";
        }
    }
    else {
        std::cout << "[";
    }

    std::cout << Key << " , " << data.GetInt() << " ]" << std::endl;

    if (Left) {
        ids.push_back(Right != nullptr);
        Left->PrintNode(depth + 1, ids);
        ids.pop_back();
    }
    else {
        if (Right) {
            ids.push_back(false);
        }
    }

    if (Right) {
        ids.push_back(false);
        Right->PrintNode(depth + 1, ids);
        ids.pop_back();
    }
}

int Node::CalculateLength() {

    if (Left == nullptr && Right == nullptr) {
        return 1;
    }
    
    int leftLength = (Left != nullptr) ? Left->CalculateLength() : 0;
    int rightLength = (Right != nullptr) ? Right->CalculateLength() : 0;

    return 1 + std::max(leftLength, rightLength);
}

void Node::Insert(int k, DATA d) {
    if (k < Key) {
        if (Left) {
            Left->Insert(k, d);
        }
        else {
            Left = new Node(k, d);
        }
    }
    else {
        if (Right) {
            Right->Insert(k, d);
        }
        else {
            Right = new Node(k, d);
        }
    }
}

Node::~Node() {
    if(Left != nullptr)
        delete Left;
    if (Right != nullptr)
        delete Right;
}
