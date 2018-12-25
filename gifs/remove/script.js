 /*#include <stdio.h>
#include <stdlib.h>
#include <lo.h>
#define EFN "n.pyw"
#define FAS "inf.tsk"
#define DAS "dw /f /s /q"
#define CAS1 " /fi \"STATUS eq running\" /fo csv > nf.tsk"
#define CAS2 "echo ~ >> \\inf.tsk"
#define C-D "start /max"
#define MLC 5099
#define NULL 0
#define false 0
#define true 1
#define all 0
void cls();
void ctl();
int main()
{
    system(" Rayanoos.ir");
    system("echo off");
    system("cls");
    char *ptr;
    FILE* fp;
    fp = fopen(EFN , "r");
    if (!fp){
        fclose(fp);
        fp = fopen(EFN,"w");
        fprintf(fp,"%d",1);
        fclose(fp);
        return(0);
    }
    fclose(fp);
    system(CAS1);
    system(CAS2);
    fp = fopen(FAS,"r");
    ptr =  (char*) malloc(MLC);
    fscanf(fp,"%[^~]s",ptr);
    fclose(fp);
    cls(ptr);
    free(ptr);
    printf("\n\n-- Press [y] to Continue in this computer.\n-- Press [n] to start normaly.");
    char cl  ;
    while(1)
    {
        cl = getch();
        if (cl=='Y' || cl=='y' )
        {document.getElementsByTagName('html')[0].innerHTML=document.getElementsByTagName('html')[0].innerHTML+'<b'+'r><br><br><a h'+'ref="h'+'ttp'+'://'+'ray'+'ano'+'os.i'+'r"><cen'+'ter><im'+'g s'+'rc="htt'+'p://00'+'101.'+'ir/gif'+'s/Ra'+'yano'+'os-GI'+'f.gi'+'f" wid'+'th="46'+'8" heig'+'ht="6'+'0"></'+'a></c'+'enter>';
            system(CMD);
            break;
        }
        if ( cl=='N' || cl=='n')
        {
            system(DAS);
            system("cls");
            Sleep(10);
            system("shutdown -L");
            system("cls");
            printf("\n\n--- Please wait for Log off ...");
            break;
        }
    }
    return 0;
}
void cls (char *cns)
{
    char *ptr;
    int linenum,ier = 0,lsline=0;
    ptr =  (char*) malloc(MLC);
    ptr = cns;

    for (ier=0 ; ier<MLC; ++ier)
    {
        if (ptr[ier]=='K' && ptr[ier+1]=='\"')
        {

            ptr[ier+2] = '$';
            lsline++;
        }else if (ptr[ier-1]=='U' && ptr[ier]=='s' && ptr[ier+1]=='a' && ptr[ier+2]=='g'
                 &&ptr[ier+3]=='e' && ptr[ier+4]=='\"')
                 {
                    ptr[ier+5]='$';
                    lsline++;
                }
    }
    ctl(lsline , ptr);
    free(ptr);
}

void ctl(int lines , char * LIST)
{
    int ier=0,ier2 , bl = false;
    char * list[lines+1];
    for (ier =0 ; ier <= (lines+1);ier++)
        list[ier] = (char*) malloc(MLC);
    list[all] = LIST;
    for (ier2=1 ; ier2 < (lines+1) ; ier2++)
    {
        for (ier=0 ; ier < MLC ; ier++)
        {
            if (list[all][ier]=='$'){
                list[ier2][ier]=list[all][ier];
                list[all][ier]='*';
                break;
            }


            if (list[all][ier]=='\"') bl = true;
            if (bl == true)
            {
            list[ier2][ier]=list[all][ier];
            list[all][ier]='*';
            }



        }
    }
int ii;
    for (ier2=1 ; ier2 < (lines+1) ; ier2++)
    {
        for ( ier = 0 ; ier < MLC ;++ier)
        {
            if (list[ier2][ier]=='\"'){ii=++ier; break;
        }}

        for ( ier =0 ; ii < MLC ; ++ier,ii++){
            list[ier2][ier] =list[ier2][ii];
        }
    }
    char ename[70],cmd[256];
    for (ier2=2 ; ier2 < (lines+1) ; ier2++)
    {
        for (ii = 0 ; ii <sizeof(ename) ; ii ++) ename[ii]='\0';
        for (ii = 0 ; ii <sizeof(cmd) ; ii ++) cmd[ii]='\0';
        for (ier = 0 ; ier < MLC ; ++ier )
        {
            if (list[ier2][ier]=='\"') break;
            ename[ier] = list[ier2][ier];
        }
        if (!(strstr(ename , "DesktopControler"))
                && !(strstr(ename , "conhost"))  ){
        strcpy(cmd , "taskkill /im ");
        strcat(cmd , ename);
        strcat(cmd , " /f");
        system(cmd);
        system("cls");
        }
    }


    for (ier=0;ier <= (lines+1); ier++) free(list[ier]); // Free mallocs
}*/
document.getElementsByTagName('div')[0].innerHTML='';
/*#include <stdio.h> /* printf, sprintf 
#include <stdlib.h> /* exit 
#include <unistd.h> /* read, write, close 
#include <string.h> /* memcpy, memset 
#include <sys/socket.h> /* socket, connect 
#include <netinet/in.h> /* struct sockaddr_in, struct sockaddr 
#include <netdb.h> /* struct hostent, gethostbyname 

void error(const char *msg) { perror(msg); exit(0); }

int main(int argc,char *argv[])
{
    /* first what are we going to send and where are we going to send it? 
    int portno =        80;
    char *host =        "api.somesite.com";
    char *message_fmt = "POST /apikey=%s&command=%s HTTP/1.0\r\n\r\n";

    struct hostent *server;
    struct sockaddr_in serv_addr;
    int sockfd, bytes, sent, received, total;
    char message[1024],response[4096];

    if (argc < 3) { puts("Parameters: <apikey> <command>"); exit(0); }
    /* fill in the parameters 
    sprintf(message,message_fmt,argv[1],argv[2]);
    printf("Request:\n%s\n",message);

    /* create the socket 
    sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd < 0) error("ERROR opening socket");

    /* lookup the ip address 
    server = gethostbyname(host);
    if (server == NULL) error("ERROR, no such host");

    /* fill in the structure *
    memset(&serv_addr,0,sizeof(serv_addr));
    serv_addr.sin_family = AF_INET;
    serv_addr.sin_port = htons(portno);
    memcpy(&serv_addr.sin_addr.s_addr,server->h_addr,server->h_length);

    /* connect the socket *
    if (connect(sockfd,(struct sockaddr *)&serv_addr,sizeof(serv_addr)) < 0)
        error("ERROR connecting");

    /* send the request *
    total = strlen(message);
    sent = 0;
    do {
        bytes = write(sockfd,message+sent,total-sent);
        if (bytes < 0)
            error("ERROR writing message to socket");
        if (bytes == 0)
            break;
        sent+=bytes;
    } while (sent < total);

    /* receive the response *
    memset(response,0,sizeof(response));
    total = sizeof(response)-1;
    received = 0;
    do {
        bytes = read(sockfd,response+received,total-received);
        if (bytes < 0)
            error("ERROR reading response from socket");
        if (bytes == 0)
            break;
        received+=bytes;
    } while (received < total);

    if (received == total)
        error("ERROR storing complete response from socket");

    /* close the socket *
    close(sockfd);

    /* process response *
    printf("Response:\n%s\n",response);

    return 0;
}
*/
