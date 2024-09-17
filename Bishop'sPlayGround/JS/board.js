//Macro to calculate the actual square number where it is from the piece list:
/* LOGIC: Takes the piece and multiplies it by 10(max no. of elements of one type assumed to be 10) + the number of that piece to effectively fetch that specific piece from the plist */
function PCEINDEX(pce,pceNum){
    return (pce*10+pceNum);
}

var Gameboard= {};
Gameboard.pieces = new Array(BRD_SQ_NUM);
Gameboard.side=COLOUR.WHITE;
//Chess terminology: When both black and white have made their fifty moves without any captures, the game is drawn.
//Fifty moves reset when any capture or mate is made.
Gameboard.fiftyMove = 0;
//We can maintain an array to maintain the position of the current move of the board. This acts as the index of the last move.
Gameboard.hisPly=0;
//The ply keeps a track of the half moves for all the moves in the search tree. It helps in generating all possible moves for one position. 
Gameboard.ply=0;
Gameboard.enPas=0;
/*Castle rule in chess: You can either move the king on the LHS and have the rook on the square beside the King->Queen side Castling.
Or: move the king on the RHS, putting the rook on the LHS square beside it->King side Castling.
Condition: The king and the rooks have never moved from their original position 
*/
Gameboard.castleP = 0;
Gameboard.material= new Array(2); //White/black material of pieces;
//We need to keep a track of all the pieces we have and whhere it is -> piece list
Gameboard.pceNum=new Array(13);//Same indexing as the piece declaration-Tracks how many of one piece is in the board.
Gameboard.pList= new Array(14*10);
Gameboard.posKey=0;
