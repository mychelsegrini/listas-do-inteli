#include <stdio.h>
#include <string>
#include <vector>
using namespace std;

void printMatrix(vector<vector<float>> C){
    for(int i = 0; i < C.size(); i++){
        for(int j = 0; j < C.size(); j++){
            printf("%f ", C[i][j]);
        }
        printf("%c", '\n');
    }

}

int main(){
    vector<vector<float>> C = {{1, 2},{2, 3}};

    printMatrix(C);

}