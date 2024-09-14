/* We will use a 120 piece board instead of the regular 64 piece, to pad and make sure that our pieces do not move outside.
The top and the bottom will have two layers of paddings because of how the Knight moves, 1,2, 2 1/2.
Rest two sides can be managed by one layer due to the continuity of the numbering of the block. */
var PIECES={EMPTY : 0, wP: 1, wN : 2, wB : 3, wR : 4, wQ : 5, wK : 6, bP : 7, bN : 8, bB : 9, bR : 10, bQ : 11, bK :12 };
var BRD_SQ_NUM = 120;
var FILES={FILE_A:0, FILE_B:1, FILE_C:2, FILE_D:3, FILE_E:4, FILE_F:5, FILE_G:6, FILE_H:7, FILE_NONE:8};
var RANKS={RANK_1:0, RANK_2:1, RANK_3:2, RANK_4:3, RANK_5:4, RANK_6:5, RANK_7:6, RANK_8:7, RANK_NONE:8};
var COLOURS={WHITE:0, BLACK:1, BOTH:2};
//Incase we need to find out which side's turn it is, we can just simply use side=side^1
//Since, the size of our board is 120, the first 1-20 are reserved for the useless padding on the upper side and 100-120 for the useless padding on the layer below.
//Effectively, we work with 21-98 numbered squares.
var SQUARES={A1:21, B1:22, C1:23, D1:24, E1:25, F1:26, G1:27, H1:28,
    A8:91, B8:92, C8:93, D8:94, E8:95, F8:96, G8:97, H8:98,
    NO_SQ:99, OFFBOARD:100
};
var BOOL={FALSE:0, TRUE:1};