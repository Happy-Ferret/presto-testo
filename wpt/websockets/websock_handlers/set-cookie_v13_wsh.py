#!/usr/bin/python

import sys, urllib
from mod_pywebsocket import common, util, msgutil
from base64 import b64encode, b64decode


def web_socket_do_extra_handshake(request):
	request.connection.write('HTTP/1.1 101 LOL\x0D\x0AConnection: Upgrade\x0D\x0AUpgrade: WebSocket\x0D\x0ASec-WebSocket-Origin: '+request.ws_origin+'\x0D\x0ASec-WebSocket-Location: '+request.ws_location+'\x0D\x0ASet-Cookie: '+urllib.unquote(request.ws_location.split('?', 1)[1]).decode("string-escape")+'\x0D\x0A\x0D\x0A'+request.ws_challenge_md5+'\xFF\x00')

def web_socket_transfer_data(request):
	pass