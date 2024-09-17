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
/*Castle rule in chess: You can either move the king on the LHS and have the rook on the square beside the King->Queen side Castling.
Or: move the king on the RHS, putting the rook on the LHS square beside it->King side Castling.
Condition: The king and the rooks have never moved from their original position 
*/
Gameboard.castleP = 0;