#include<stdio.h>
#include<string.h>
int main()
{
    int n,i,j,k;
    scanf(" %d", &n);
    int a[n][n];
    int b[n][n];
    int multiply[n][n];
    int sum=0;
    for( i=0; i<n; i++)
    {
        for( j=0; j<n; j++)
        {
            scanf(" %d", &a[i][j]);
        }
    }
     for( i=0; i<n; i++)
    {
        for( j=0; j<n; j++)
        {
            scanf(" %d", &b[i][j]);
        }
    }
    for ( i = 0; i < n; i++) {
      for ( j = 0; j < n; j++) {
        for ( k = 0; k < n; k++) {
          sum = sum + a[i][k]*b[k][j];
        }
 
        multiply[i][j] = sum;
        sum = 0;
      }
    }
     printf("Product of the matrices:\n");
      for ( i = 0; i < n; i++) {
      for ( j = 0; j < n; j++){
        printf("%d\t", multiply[i][j]);
 
      
    }printf("\n");
  }
 
    
    return 0;
}
